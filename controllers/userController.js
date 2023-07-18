const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// @description: Register a User
// @route: POST /api/user/register
// @access: public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        res.status(400);
        throw new Error("Please enter all required information");
    }

    const userAvailable = await User.findOne({ email });

    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 4);

    // Insert User on table
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if(user) {
        res.status(201).send({ _id: user._id, email: user.email });
    } else {
        res.status(400)
        throw new Error("Data not valids!");
    }

    console.log(`User created: ${user}`);

    res.send({ message: "Regiter the user!" });
});

// @description: Login User
// @route: POST /api/user/login
// @access: public
const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All Fields mandatory!");
    }

    const user = await User.findOne({ username, email });

    // comparing password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN, 
        { expiresIn: "1h" });
        res.status(200).send({ accessToken });
    } else {
        res.status(401);
        throw new Error("Failed to sign in!");
    }

    return res.status(200).send({ message: "Login user!" });
});

// @description: Current User
// @route: GET /api/user/current
// @access: public
const currentUser = asyncHandler(async (req, res) => {
    return res.json(req.user);
});

// @description: Modernize User
// @route: PUT /api/user/modernize
// @access: private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 4);

    if(!user) {
        res.status(404);
        throw new Error({ message: "user not found!" });
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
            username,
            email,
            password: hashedPassword
        },
        { new: true }
    );

    console.log(`User updated: ${updatedUser}`);

    return res.status(200).send(updatedUser);
});

module.exports = { registerUser, loginUser, currentUser, updateUser };

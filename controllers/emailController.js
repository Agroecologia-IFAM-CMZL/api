const asyncHandler = require('express-async-handler');
const Email = require('../models/emailModel');

// @description: Search Email
// @route: GET /api/email/:id
// @access: public
const getEmail = asyncHandler(async (req, res) => {
    const email = await Email.findById(req.params.id);

    if(!email) {
        res.status(404);
        throw new Error({ message: "Email not registered!" });
    }

    res.status(200).send(email);
});

// @description: Insert New Email
// @route: POST /api/email
// @access: public
const insertEmail = asyncHandler(async (req, res) => {
    const { email } = req.body;

    // check if email already registered
    const emailRegistered = await Email.findOne({ email });

    if(emailRegistered) {
        res.status(400);
        throw new Error("Email already registered!");
    }

    const emailSent = await Email.create({
        email
    });

    console.log(`email sending: ${emailSent}`);

    res.send({ message: "Email Sent!" });
});

// @description: Delete a Email
// @route: DELETE /api/email/:id
// @access: private
const deleteEmail = asyncHandler(async (req, res) => {
    const email = await Email.findById(req.params.id);

    await Email.deleteOne({ _id: req.params.id });

    res.status(200).send(email);
});

module.exports = { getEmail, insertEmail, deleteEmail };

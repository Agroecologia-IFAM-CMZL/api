const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Add your username"]
    },
    email: {
        type: String,
        required: [true, "Add your email"],
        unique: [true, "Email already registered"]
    },
    password: {
        type: String,
        required: [true, "Add your password"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);

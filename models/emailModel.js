const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
    email: {
        type: 'string',
        required: [true, "Add the email!"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Email", emailSchema);

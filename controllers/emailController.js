const asyncHandler = require('express-async-handler');
const v4 = require('uuid').v4();

let emails = [];

// @description: Show Emails
// @route: GET /api/email
// @access: public
const showEmails = asyncHandler(async (req, res) => {
    res.send({ "e-mails": emails });
});

// @description: Insert New Email
// @route: POST /api/email
// @access: public
const insertEmail = asyncHandler(async (req, res) => {
    const email = req.body;

    emails.push({ id: v4, ...email});

    res.send(email);
});

// @description: Delete a Email
// @route: DELETE /api/email/:id
// @access: private
const deleteEmail = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const email = emails.findIndex(email => email.id === id);
    emails.splice(email, 1);
    
    res.send({ message: `Email ${id} deleted!` });
});

module.exports = { showEmails, insertEmail, deleteEmail };

const express = require('express');
const router = express.Router();
const { 
    showEmails, insertEmail, 
    deleteEmail 
} = require('../controllers/emailController');

router.route('/').get(showEmails).post(insertEmail);
router.route('/:id').delete(deleteEmail);

module.exports = router;
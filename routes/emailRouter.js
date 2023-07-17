const express = require('express');
const router = express.Router();
const { 
    getEmail, insertEmail,
    deleteEmail 
} = require('../controllers/emailController');

router.route('/').post(insertEmail);
router.route('/:id').get(getEmail).delete(deleteEmail);

module.exports = router;

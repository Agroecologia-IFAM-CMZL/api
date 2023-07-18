const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateTokenHandler');

const { 
    registerUser, loginUser, currentUser, updateUser
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', validateToken, currentUser);
router.put('/update/:id', updateUser);

module.exports = router;

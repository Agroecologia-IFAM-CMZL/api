const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateTokenHandler');
const { 
    getNews, createNews, 
    updateNotice, deleteNotice
} = require('../controllers/newsController');

//router.use(validateToken);
router.route('/view/:id').get(getNews);
router.route('/insert').post(validateToken, createNews);
router.route('/update/:id').put(validateToken, updateNotice);
router.route('/delete/:id').delete(validateToken, deleteNotice);

module.exports = router;

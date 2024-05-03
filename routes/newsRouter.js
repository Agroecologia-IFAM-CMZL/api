const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateTokenHandler');
const { 
    getNews, getNotice, createNews, 
    updateNotice, deleteNotice
} = require('../controllers/newsController');

//router.use(validateToken);
router.route('/list/:id').get(getNews);
router.route('/view/:id').get(getNotice);
router.route('/insert').post(validateToken, createNews);
router.route('/update/:id').put(validateToken, updateNotice);
router.route('/delete/:id').delete(validateToken, deleteNotice);

module.exports = router;

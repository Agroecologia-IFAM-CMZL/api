const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateTokenHandler');
const { 
    getNews, createNews, 
    getNotice, updateNotice, deleteNotice 
} = require('../controllers/newsController');

router.use(validateToken);
router.route('/').get(getNews).post(createNews);
router.route('/:id').get(getNotice).put(updateNotice).delete(deleteNotice);

module.exports = router;

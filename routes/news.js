import express from 'express';
import {
    getNewsList,
    getNews,
    createNews,
    updateNews,
    deleteNews
} from '../controllers/news.js';

const routes = express.Router();

// Todas as rotas a serem usadas pelo frontend
routes.get('/', getNewsList);
routes.get('/:id', getNews);
routes.post('/', createNews);
routes.patch('/:id', updateNews);
routes.delete('/:id', deleteNews);

export default routes;
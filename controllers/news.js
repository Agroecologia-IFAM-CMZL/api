import { v4 as uuidv4 } from 'uuid';

let news = [];

// GETs
export const getNewsList = (req, res) => {
    res.send(news);
}

export const getNews = (req, res) => {
    const { id } = req.params;
    const newsFound = news.find((news) => news.id === id);
    res.send(newsFound);
}

// POST
export const createNews = (req, res) => {
    const report = req.body;
    news.push({ id: uuidv4(), ...report });
    res.send(report);
}

// DELETE
export const deleteNews = (req, res) => {
    const { id } = req.params;
    news = news.filter((report) => report.id !== id);
    res.send(`News ${id} deleted!`);
}

// PATCH
export const updateNews = (req, res) => {
    const { id } = req.params;
    const { 
        title, subtitle, 
        paragraph01, paragraph02, paragraph03 
    } = req.body;
    const report = news.find((report) => report.id === id);

    if(title) report.title = title;
    if(subtitle) report.subtitle = subtitle;

    if(paragraph01) report.paragraph01 = paragraph01;
    if(paragraph02) report.paragraph02 = paragraph02;
    if(paragraph03) report.paragraph03 = paragraph03;

    res.send('News updated!');
}
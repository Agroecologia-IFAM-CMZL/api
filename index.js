import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/news.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/news', routes);

// arquivos estáticos (na pasta 'public' do diretório)
app.use(express.static('public'));

// rota de exemplo: http://localhost:3000/news.json

app.listen(PORT, () => console.log(`Server ON in http://localhost:${PORT}`));

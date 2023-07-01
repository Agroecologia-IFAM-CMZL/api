import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/news.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/news', routes);

// arquivos estáticos (na pasta 'public' do diretório)
app.use(express.static('public'));

app.listen(PORT, () => console.log("Server is Up!"));
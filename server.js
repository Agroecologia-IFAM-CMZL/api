const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./configs/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();
const PORT = process.env.PORT || 3060;

app.use(express.json());
app.use("/api/news", require("./routes/newsRouter"));
app.use("/api/user", require("./routes/userRouter"));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
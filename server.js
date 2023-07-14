const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./configs/dbConnection');
const dotenv = require('dotenv').config();
const cors = require('cors');

connectDB();
const app = express();
const PORT = process.env.PORT || 3060;

app.use(cors());
app.use(express.json());

app.use("/api/news", require("./routes/newsRouter"));
app.use("/api/user", require("./routes/userRouter"));
app.use("/api/email", require("./routes/emailRouter"));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
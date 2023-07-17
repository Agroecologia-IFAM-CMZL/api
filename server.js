const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./configs/dbConnections');

connectDB();

const app = express();
const PORT = process.env.PORT || 6060;

app.use(cors());
app.use(express.json());

app.use("/api/news", require("./routes/newsRouter"));
app.use("/api/user", require("./routes/userRouter"));
app.use("/api/email", require("./routes/emailRouter"));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

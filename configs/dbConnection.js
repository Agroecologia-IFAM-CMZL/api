const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.URL_DB);
        console.log(
            `Connected to database: \n
            Host: ${connect.connection.host},
            Name: ${connect.connection.name}
        `);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;

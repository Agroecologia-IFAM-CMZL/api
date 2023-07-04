import sqlite3 from 'sqlite3';
import express from 'express';

const dbSQLite = sqlite3;
var app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});

const db = new dbSQLite.Database('./database.db', (err) => {
    if (err) {
        console.error("Erro opening database " + err.message);
    } else {

        db.run('CREATE TABLE news( \
            new_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            title NVARCHAR(20)  NOT NULL,\
            subtitle NVARCHAR(20)  NOT NULL,\
            paragraph1 NVARCHAR(100) NOT NULL,\
            paragraph2 NVARCHAR(100) NOT NULL,\
            paragraph3 NVARCHAR(100) NOT NULL\
        )', (err) => {
            if (err) {
                console.log("Table already exists.");
            }

            let insert = 'INSERT INTO news (title, subtitle, paragraph1, paragraph2, paragraph3) VALUES (?,?,?,?,?)';
            
            db.run(insert, [
                "Title Test Number 01", 
                "SubTitle Test Number 01", 
                "Content Paragraph 1 builded for testing Database",  
                "Content Paragraph 2 builded for testing Database", 
                "Content Paragraph 3 builded for testing Database"
            ]);

            db.run(insert, [
                "Title Test Number 02",
                "SubTitle Test Number 02", 
                "Content Paragraph 1 builded for testing Database",  
                "Content Paragraph 2 builded for testing Database", 
                "Content Paragraph 3 builded for testing Database"
            ]);

            db.run(insert, [
                "Title Test Number 03", 
                "SubTitle Test Number 03", 
                "Content Paragraph 1 builded for testing Database",  
                "Content Paragraph 2 builded for testing Database", 
                "Content Paragraph 3 builded for testing Database"
            ]);
        });
    }
});

export default db;
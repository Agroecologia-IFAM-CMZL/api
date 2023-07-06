const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to the file SQlite database.');
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }

    db.run('CREATE TABLE emails( \
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
        email NVARCHAR(20) NOT NULL \
        )', (err) => {
            if (err) {
                console.log("Table already exists.");
            }

        let insert = 'INSERT INTO emails (email) VALUES (?)';
        
        db.run(insert, [
            "2021002252@ifam.edu.br"
        ]);

        console.log('Closed db connection!');
    });
});

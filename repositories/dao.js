const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const db = new sqlite3.Database('./database.db');
const saltRounds = 4;

export default class {

    static setupDB() {
        //  This sets up a DB in memory to be used by creating tables, inserting values, etc.
        db.serialize(function () {
            const createUsersTable = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT, password text)";
            db.run(createUsersTable);

            const createItemsTable = "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price NUMERIC)";
            db.run(createItemsTable);

            let password = 'adm123';

            bcrypt.hash(password, saltRounds, function (err, hash) {
                const insertUsers = `INSERT INTO users (username, password) VALUES ('foo', '${hash}'), ('bar', '${hash}');`
                db.run(insertUsers);
            });

            const insertItems = `INSERT INTO items (name, price) VALUES ('book', 12.99), ('t-shirt', 15.99), ('milk', 3.99);`
            db.run(insertItems);
        });
    }

    static all(stmt, params) {
        return new Promise((res, rej) => {
            db.all(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }
    static get(stmt, params) {
        return new Promise((res, rej) => {
            db.get(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }

    static run(stmt, params) {
        return new Promise((res, rej) => {
            db.run(stmt, params, (error, result) => {
                if (error) {
                    return rej(error.message);
                }
                return res(result);
            });
        })
    }
}
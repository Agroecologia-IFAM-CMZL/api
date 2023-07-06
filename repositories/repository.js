import dao from './dao';

export default class {
    // GETs ITEMS
    static getAllItems() {
        return dao.all(`SELECT * FROM items`, [], (err, data) => {
            if (err) {
              return res.status(400).json({ "error": err.message });
            }
    
            return res.status(200).json({data});
        });
    }

    static getItemById(id) {
        return dao.get(`SELECT * FROM items where id = ?`, [id], (err, row) => {
            if (err) {
                return res.status(400).json({"error":err.message});
            }
    
            return res.status(200).json(row);
        });
    }

    // GETs USERS
    static getUserByUsername(username) {
        return dao.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
            if (err) {
                return res.status(400).json({"error":err.message});
            }
    
            return res.status(200).json(row);
        });
    }

    static getUserById(id) {
        return dao.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
            if (err) {
                return res.status(400).json({"error":err.message});
            }
    
            return res.status(200).json(row);
        });
    }

    // POST
    static createItem(req, res) {
        var data = req.body;

        dao.run(`INSERT INTO items (name, price) VALUES (?,?)`,
            [data.name, data.price],
            function (err, result) {
                if (err) {
                    return res.status(400).json({ "error": err.message });
                }

                res.status(201).json({
                    "id": this.lastID
                });
            }
        );
    }

    // PATCH
    static updateItem(req, res) {
        var data = req.body;

        dao.run(`UPDATE news set name = ?, price = ? WHERE id = ?`,
            [data.name, data.price, data.id],
            function (err, result) {
                if (err) {
                    return res.status(400).json({ "error": res.message })
                }

                return res.status(200).json({ updatedID: this.changes });
            }
        );
    }

    // DELETE
    static deleteItem(req, res) {
        dao.run(`DELETE FROM news WHERE id = ?`, req.params.id,
        function (err, result) {
            if (err) {
                return res.status(400).json({ "error": res.message });
            }

            res.status(200).json({ deletedID: this.changes });
        });
    }
}
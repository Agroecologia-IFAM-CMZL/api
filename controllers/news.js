import db from "../database/db.js";

// GETs
export const getNewsList = (req, res) => {
    db.all("SELECT * FROM news", [], (err, data) => {
        if (err) {
          return res.status(400).json({ "error": err.message });
        }

        return res.status(200).json({data});
    });
}

export const getNews = (req, res) => {
    db.get(`SELECT * FROM news where new_id = ?`, [req.params.id], (err, row) => {
        if (err) {
            return res.status(400).json({"error":err.message});
        }

        return res.status(200).json(row);
    });
}

// POST
export const createNews = (req, res) => {
    var data = req.body;

    db.run(
        `INSERT INTO news (title, subtitle, paragraph1, paragraph2, paragraph3) VALUES (?,?,?,?,?)`,
        [data.title, data.subtitle, data.paragraph1, data.paragraph2, data.paragraph3],
        function (err, result) {
            if (err) {
                return res.status(400).json({ "error": err.message })
            }

            res.status(201).json({
                "new_id": this.lastID
            });
        }
    );
}

// PATCH
export const updateNews = (req, res) => {
    var data = req.body;

    db.run(`UPDATE news set title = ?, subtitle = ?, paragraph1 = ?, paragraph2 = ?, paragraph3 = ? WHERE new_id = ?`,
        [data.title, data.subtitle, data.paragraph1, data.paragraph2, data.paragraph3, data.new_id],
        function (err, result) {
            if (err) {
                return res.status(400).json({ "error": res.message })
            }

            return res.status(200).json({ updatedID: this.changes });
        }
    );
}

// DELETE
export const deleteNews = (req, res) => {
    db.run(`DELETE FROM news WHERE new_id = ?`,
        req.params.id,
        function (err, result) {
            if (err) {
                return res.status(400).json({ "error": res.message })
            }

            res.status(200).json({ deletedID: this.changes })
        }
    );
}

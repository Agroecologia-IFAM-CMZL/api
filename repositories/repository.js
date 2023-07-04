import dao from './dao';

export default class {

    static async getAllItems() {
        return await dao.all("SELECT * FROM items", [])
    }

    static async getItemById(id) {
        return await dao.get("SELECT * FROM items WHERE id = ?", [id])
    }

    static async getUserByUsername(username) {
        return dao.get("SELECT * FROM users WHERE username = ?", [username]);
    }

    static async getUserById(id) {
        return dao.get('SELECT * FROM users WHERE id = ?', [id]);
    }
}
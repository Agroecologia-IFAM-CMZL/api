import repository from '../repositories/repository';

export default class {
    static async getAllItems(req, res) {
        let items = await repository.getAllItems();
        return res.send({ items });
    };

    static async getItemById(req, res) {
        let items = await repository.getItemById(req.params.id);
        return res.send({ items });
    }

    static async createItem(req, res) {
        let newItem = await repository.createItem(req.body);
        return res.send({ 'New Item Added!': newItem });
    }

    static updateItem(req, res) {
        let item = repository.updateItem(req.params.id);
        return res.send({ 'Item Updated!': item });
    }

    static deleteItem(req, res) {
        let item = repository.deleteItem(req.params.id);
        return res.send({ 'Item Deleted!': item });
    }
}

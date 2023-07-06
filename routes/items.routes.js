import itemsController from '../controllers/items.controller';

import * as express from 'express';
const router = express.Router();

router.get("/", itemsController.getAllItems);
router.get("/:id", itemsController.getItemById);
router.post("/", itemsController.createItem);
router.patch("/", itemsController.updateItem);
router.delete("/:id", itemsController.deleteItem);

module.exports = router;
const ItemLista = require("../models/ItemLista");

const ItemListaController = {
    async showItems(req, res) {
        try {
            const getItems = await ItemLista.find();
            res.status(200).send(getItems);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem geting the items" });
        }
    },
    async createItems(req, res) {
        try {
            const newItem = await ItemLista.create(req.body)
            res.status(201).json(newItem)

        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem trying to create the item" });
        }
    },
    async updateItem (req, res) {
        try {
            const idItem = req.params.itemId;
            const updatedItem = await ItemLista.findByIdAndUpdate(
                idItem, 
                {
                    item: req.body.item,  
                }, 
                { new: true } 
            );
            res.json(updatedItem); 
          } catch (err) {
            console.error("Could not update item: ", err)
          }
    },
    async deleteItem(req, res) {
        try {
            const idItem = req.params.itemId
            const deleteItem = await ItemLista.findByIdAndDelete(idItem)
            res.json({mensaje: "Item deleted", deleteItem})
          } catch (err) {
            console.error("Could not delete the item: ", err)
          }
    }
}

module.exports = ItemListaController
const express = require("express");
const router = express.Router();
const ItemLista = require("../models/ItemLista"); 
const controllersAPI = require("../controllers/controllersAPI");



router.get("/items", controllersAPI.showItems)

//router.get("/menu", controllersAPI.showProducts)
router.post("/itemcreate", controllersAPI.createItems)
//router createmenu
router.put("/item/:itemId", controllersAPI.updateItem)
//put menu??? como sera eso
router.delete("/item/delete/:itemId", controllersAPI.deleteItem)

module.exports = router;
const express = require("express");
const router = express.Router();
const ItemLista = require("../models/ItemLista"); 
const WeekMenu = require("../models/WeekMenu");
const controllerList = require("../controllers/controllerList");
const controllerMenu = require("../controllers/controllerMenu");


router.get("/items", controllerList.showItems)
router.get("/menu", controllerMenu.showMenu)
router.post("/itemcreate", controllerList.createItems)
router.post("/menucreate", controllerMenu.createOrUpdateMenu)
router.put("/item/:itemId", controllerList.updateItem)
router.put("/menu/reset", (req, res, next) => {
    req.body = {};
    next();
  }, controllerMenu.resetMenu);
  
router.delete("/item/delete/:itemId", controllerList.deleteItem)

module.exports = router;
const express = require("express");
const { addMenuItem, getMenusByCategory } = require("../controllers/menu.controller");

const router = express.Router();

router.post("/add-item", addMenuItem);
router.get("/:category", getMenusByCategory);

module.exports = router;


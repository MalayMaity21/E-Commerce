const express = require("express");
const { getALLProducts, singleProductById } = require("../controllers/productController.js");

const router = express.Router();

router.get("/", getALLProducts);

router.get("/:id", singleProductById);

module.exports = router;

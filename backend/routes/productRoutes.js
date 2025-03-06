const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController.js");

const router = express.Router();

// GET all products
router.get("/", getAllProducts);

// GET a product by ID
router.get("/:id", getProductById);

// POST a new product
router.post("/", createProduct);

// PUT update a product by ID
router.put("/:id", updateProductById);

// DELETE a product by ID
router.delete("/:id", deleteProductById);

module.exports = router;

const express = require("express");
const {
  allOrders,
  getOneOrder,
  singleUserOrder,
  newUser,
  adminInsertData,
} = require("../controllers/orderController.js");
const { protect, adminMiddleware } = require("../middleware/authMiddleware.js");
const router = express.Router();

// ALL THE GET REQUESTS

// Get all orders
router.get("/", allOrders);

// Get an order by ID
router.get("/:id", getOneOrder);

// Get a single user's orders
router.get("/myOrders", protect, singleUserOrder);

// ALL THE POST REQUESTS

// Create a new Order
router.post("/", newUser);

// Admin insert data
router.post("/adminInsertData", adminMiddleware, adminInsertData);

module.exports = router;

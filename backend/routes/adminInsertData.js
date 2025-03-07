const express = require("express");
const { adminInsertData } = require("../controllers/orderController.js");
const { adminMiddleware } = require("../middleware/authMiddleware.js");
const router = express.Router();

// Admin insert data
router.post("/", adminMiddleware, adminInsertData);

module.exports = router;

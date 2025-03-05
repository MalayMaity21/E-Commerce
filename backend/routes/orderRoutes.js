import express from "express";
import Order from "../models/Order.js";
import mongoose from "mongoose";
import { protect } from '../middleware/authMiddleware.js';
import { allOrders, getOneOrder, singleUserOrder, newUser } from "../controllers/orderController.js";


const router = express.Router();


//ALL THE GET REQUEST

// Get all orders
router.get("/", allOrders);

// Get an order by ID
router.get("/:id", getOneOrder);

//get a single user orders
router.get("/myOrders", protect, singleUserOrder);



//ALL THE POSTS REQUESTS

// Create a new Order
router.post("/", newUser);


export default router;
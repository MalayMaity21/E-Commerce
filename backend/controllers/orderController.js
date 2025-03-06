const express = require("express");
const Order = require("../models/Order.js");
const mongoose = require("mongoose");
const { protect } = require("../middleware/authMiddleware.js");

//get all orders
const allOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("items.product");
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get an order by id
const getOneOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Order ID" });
    }

    const order = await Order.findById(id)
      .populate("user")
      .populate("items.product");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//function to get a single users order
const singleUserOrder = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.product"
    );

    if (!orders.length) {
      return res.status(400).json({ message: "No orders found" });
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//post request
//function to create a new user
const newUser = async (req, res) => {
  try {
    const { user, items, totalAmount, isPaid } = req.body;

    if (!user || !items || !totalAmount || items.length === 0) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const newOrder = new Order({
      user,
      items,
      totalAmount,
      isPaid,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.log("Error creating order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  allOrders,
  getOneOrder,
  singleUserOrder,
  newUser,
  protect,
};

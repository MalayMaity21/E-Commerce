const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
//const morgan = require("morgan");
const orderRoutes = require("./routes/orderRoutes");
const stripeRoutes = require("./routes/stripeRoutes");

dotenv.config(); // Load environment variables

const app = express();

// // Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse JSON request body
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
// //app.use(morgan("dev")); // Log HTTP requests

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

// // Routes
// app.use("/api/orders", orderRoutes); // Order routes
// app.use("/api/payments", stripeRoutes); // Stripe payment routes

// Default Route
app.get("/", (req, res) => {
    res.send("E-Commerce API is running...");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

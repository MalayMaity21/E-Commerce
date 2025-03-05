import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import insertData from "./data.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import stripeRoutes from "./routes/stripeRoutes.js"; // Uncomment if you have stripeRoutes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
// app.use(morgan("dev")); // Log HTTP requests

// Connect to MongoDB and insert sample data
connectDB().then(async () => {
    await insertData();
});

// Routes
// API Routes
app.use('/api/users', userRoutes);
app.use("/api/products", productRoutes); // Product routes
app.use("/api/orders", orderRoutes); // Order routes
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

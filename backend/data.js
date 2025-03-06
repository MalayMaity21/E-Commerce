import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

dotenv.config();

// Sample Users
const users = [
    { userName: "Alice", email: "alice@example.com", password: "123456", address: "New York", mobNum: 1234567890 },
    { userName: "Bob", email: "bob@example.com", password: "123456", address: "Los Angeles", mobNum: 1234567891 },
    { userName: "Charlie", email: "charlie@example.com", password: "123456", address: "Chicago", mobNum: 1234567892 },
    { userName: "David", email: "david@example.com", password: "123456", address: "Houston", mobNum: 1234567893 },
    { userName: "Emma", email: "emma@example.com", password: "123456", address: "Miami", mobNum: 1234567894 },
    { userName: "Frank", email: "frank@example.com", password: "123456", address: "Boston", mobNum: 1234567895 },
    { userName: "Grace", email: "grace@example.com", password: "123456", address: "Seattle", mobNum: 1234567896 },
    { userName: "Henry", email: "henry@example.com", password: "123456", address: "Dallas", mobNum: 1234567897 },
    { userName: "Ivy", email: "ivy@example.com", password: "123456", address: "San Diego", mobNum: 1234567898 },
    { userName: "Jack", email: "jack@example.com", password: "123456", address: "San Francisco", mobNum: 1234567899 },
];

// Sample Products
const products = [
    {
        imageUrl: "https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg",
        brand: "Nike",
        title: "Evening Gown",
        color: ["Black", "Navy Blue"],
        discountedPrice: 2000,
        price: 2500,
        discountPercent: 20,
        size: [
            { name: "S", quantity: 5 },
            { name: "M", quantity: 3 },
            { name: "L", quantity: 2 }
        ],
        quantity: 10,
        topLevelCategory: "Women",
        secondLevelCategory: "Dresses",
        thirdLevelCategory: "Gowns",
        description: "Elegant black evening gown",
        publicReviewers: 5000,
        ratings: 4.5
    },
    {
        imageUrl: "https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg",
        brand: "Nike",
        title: "Summer Dress",
        color: ["Floral", "Yellow", "Pink"],
        discountedPrice: 1500,
        price: 1800,
        discountPercent: 17,
        size: [
            { name: "S", quantity: 4 },
            { name: "M", quantity: 3 },
            { name: "L", quantity: 3 }
        ],
        quantity: 10,
        topLevelCategory: "Women",
        secondLevelCategory: "Dresses",
        thirdLevelCategory: "Casual Wear",
        description: "Light and comfortable floral summer dress",
        publicReviewers: 3200,
        ratings: 4.3
    },
    {
        imageUrl: "https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg",
        brand: "Adidas",
        title: "Running Shoes",
        color: ["White", "Blue"],
        discountedPrice: 3500,
        price: 4000,
        discountPercent: 12,
        size: [
            { name: "8", quantity: 5 },
            { name: "9", quantity: 3 },
            { name: "10", quantity: 2 }
        ],
        quantity: 10,
        topLevelCategory: "Men",
        secondLevelCategory: "Footwear",
        thirdLevelCategory: "Running Shoes",
        description: "Comfortable and durable running shoes",
        publicReviewers: 4800,
        ratings: 4.7
    },
    {
        imageUrl: "https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg",
        brand: "Puma",
        title: "Hoodie Sweatshirt",
        color: ["Gray", "Black"],
        discountedPrice: 2800,
        price: 3200,
        discountPercent: 13,
        size: [
            { name: "M", quantity: 6 },
            { name: "L", quantity: 4 },
            { name: "XL", quantity: 2 }
        ],
        quantity: 12,
        topLevelCategory: "Men",
        secondLevelCategory: "Clothing",
        thirdLevelCategory: "Hoodies & Sweatshirts",
        description: "Warm and stylish hoodie for winter",
        publicReviewers: 5500,
        ratings: 4.6
    },
    {
        imageUrl: "https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg",
        brand: "Levi's",
        title: "Slim Fit Jeans",
        color: ["Blue", "Black"],
        discountedPrice: 2200,
        price: 2800,
        discountPercent: 21,
        size: [
            { name: "30", quantity: 7 },
            { name: "32", quantity: 6 },
            { name: "34", quantity: 5 }
        ],
        quantity: 18,
        topLevelCategory: "Men",
        secondLevelCategory: "Clothing",
        thirdLevelCategory: "Jeans",
        description: "Classic slim fit jeans for a modern look",
        publicReviewers: 6200,
        ratings: 4.4
    }
];



// Insert Sample Data
const insertData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(users);
        const createdProducts = await Product.insertMany(products);

        // Create sample orders using random users and products
        const orders = [];
        for (let i = 0; i < 10; i++) {
            const randomUser = createdUsers[Math.floor(Math.random() * createdUsers.length)];
            const randomProduct = createdProducts[Math.floor(Math.random() * createdProducts.length)];
            orders.push({
                user: randomUser._id,
                items: [{ product: randomProduct._id, quantity: Math.ceil(Math.random() * 3) }],
                totalAmount: randomProduct.price * Math.ceil(Math.random() * 3),
                isPaid: Math.random() > 0.5, // Randomly mark some orders as paid
            });
        }

        await Order.insertMany(orders);

        console.log("✅ Sample Data Inserted Successfully");
        // mongoose.connection.close(); // Remove this line to keep the connection open
    } catch (error) {
        console.error("❌ Error inserting data:", error);
        mongoose.connection.close();
    }
};

// Run the function
export default insertData;

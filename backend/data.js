import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

dotenv.config();

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

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
    { name: "Evening Gown", price: 2500, description: "Elegant black evening gown", stock: 5, image: "https://m.media-amazon.com/images/I/31rwL+N65HL._AC_UY1100_.jpg" },
    { name: "Summer Dress", price: 1800, description: "Light and comfortable floral summer dress", stock: 10, image: "https://www.sainly.com/cdn/shop/products/sainly-men-s-two-piece-suit-men-suits-formal-fashion-summer-suits-2-piece-dinner-suits-wedding-suits-bespoke-for-men-formal-dress-for-men-best-men-suits-summer-suits-for-men-sainly-29_800x.png?v=1663244661" },
    { name: "Party Wear", price: 3000, description: "Trendy red party dress", stock: 7, image: "https://cdn.shopify.com/s/files/1/0347/3225/files/DressingWell_30s_4_600x600.png?v=1685444690" },
    { name: "Casual Dress", price: 1500, description: "Stylish casual dress for daily wear", stock: 12, image: "https://www.mohanlalsons.com/cdn/shop/articles/Sherwani_MLS_df92cb5f-97e6-48fd-937c-65ae4011d522.jpg?v=1739435254" },
    { name: "Lace Dress", price: 2800, description: "Beautiful lace dress with intricate patterns", stock: 6, image: "https://img.perniaspopupshop.com/catalog/product/v/a/VACHILM032309_1.jpg?impolicy=listingimagenew" },
    { name: "Maxi Dress", price: 3200, description: "Flowy maxi dress perfect for any occasion", stock: 8, image: "https://media.istockphoto.com/id/1733124463/photo/stylish-dark-skinned-man-wearing-a-yellow-blazer.jpg?s=612x612&w=0&k=20&c=Cym3apJurmcvuBIE-Hrwg0J_7p32V3I2XncZcYuw7i4=" },
    { name: "Cocktail Dress", price: 2700, description: "Chic cocktail dress for special events", stock: 9, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" },
    { name: "Boho Dress", price: 2000, description: "Relaxed and stylish bohemian dress", stock: 11, image: "https://static.wixstatic.com/media/404447_3e2b2467c10241868050d6891af7f89e~mv2_d_4480_6720_s_4_2.jpg/v1/crop/x_338,y_0,w_3569,h_6720/fill/w_262,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2W6A7043-Edit.jpg" },
    { name: "Formal Dress", price: 3500, description: "Professional and elegant formal dress", stock: 4, image: "https://5.imimg.com/data5/SELLER/Default/2022/10/MS/UW/PU/161562894/fashion-garments-500x500.jpg" },
    { name: "Wedding Dress", price: 10000, description: "Stunning white wedding dress", stock: 2, image: "https://i.pinimg.com/474x/dc/d4/0d/dcd40d9a7f9cf6a52e6cd4b2b93b15f6.jpg" },
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

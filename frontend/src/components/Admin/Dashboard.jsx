import { useState } from "react";
// import axios from "axios";

const AdminOrderForm = () => {
    const [orderData, setOrderData] = useState({
        user: "",
        items: [{ product: "", quantity: 1 }],
        totalAmount: 0,
        isPaid: false,
    });

    const handleChange = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    const handleItemChange = (index, e) => {
        const newItems = [...orderData.items];
        newItems[index][e.target.name] = e.target.value;
        setOrderData({ ...orderData, items: newItems });
    };

    const addItem = () => {
        setOrderData({ ...orderData, items: [...orderData.items, { product: "", quantity: 1 }] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("adminToken"); // Get Admin JWT Token
            const response = await axios.post(
                "http://localhost:5000/api/orders",
                orderData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert("Order Created Successfully");
        } catch (error) {
            console.error("Error creating order", error);
        }
    };

    return (
        <div>
            <h2>Create Order</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" placeholder="User ID" onChange={handleChange} required />

                {orderData.items.map((item, index) => (
                    <div key={index}>
                        <input type="text" name="product" placeholder="Product ID" onChange={(e) => handleItemChange(index, e)} required />
                        <input type="number" name="quantity" placeholder="Quantity" onChange={(e) => handleItemChange(index, e)} required />
                    </div>
                ))}

                <button type="button" onClick={addItem}>Add More Items</button>

                <input type="number" name="totalAmount" placeholder="Total Amount" onChange={handleChange} required />
                <select name="isPaid" onChange={handleChange} required>
                    <option value="false">Not Paid</option>
                    <option value="true">Paid</option>
                </select>

                <button type="submit">Create Order</button>
            </form>
        </div>
    );
};

export default AdminOrderForm;

import express from 'express';
import User from '../models/user.js';

const router = express.Router();


// Route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

// Route to get a single user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user" });
    }
});

export default router;
// Compare this snippet from backend/routes/userRoutes.js:
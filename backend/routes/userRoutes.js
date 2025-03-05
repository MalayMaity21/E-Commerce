import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';
import { signupUser, loginUser, allUsers, singleUserById } from '../controllers/userController.js';

dotenv.config();

const router = express.Router();

//GET REQUESTS

// Route to get all users

router.get('/', allUsers);

// Route to get a single user by ID
router.get('/:id', singleUserById);



//POST METHODS 

// Signup Route
router.post('/signup', signupUser);

// Login Route
router.post('/login', loginUser);


export default router;
// Compare this snippet from backend/routes/userRoutes.js:
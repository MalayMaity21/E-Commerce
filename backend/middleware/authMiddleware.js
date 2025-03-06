const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Check if the request has a token in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Extract the token
            token = req.headers.authorization.split(' ')[1];

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch the user from the database (excluding password)
            req.user = await User.findById(decoded.id).select('-password');

            next(); // Call the next middleware
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, invalid token');
        }
    }

    // If no token is found
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token provided');
    }
});

module.exports = { protect };

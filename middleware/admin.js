const jwt = require('jsonwebtoken');
const JWT_SECERT = "123456";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
}

module.exports = adminMiddleware;
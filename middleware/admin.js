const Admin = require('../db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "12345"

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization; // bearer token
    const words = token.split(" "); //["Bearer", "token"]
    const jwtToken = words[1]; // token

    try{    
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        if(decoded.username){
            next();
        }else{
            res.json({
                message : "Sorry admin is not authenicated"
            }) 
        }
    }catch(error){
        res.json({
            message : "wrong inputs"
        })
    }


}

module.exports = adminMiddleware;
const User = require('../db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "12345"

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization; // bearer token
    const words = token.split(" ");
    const jwtToken = words[1];

    try{
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        if(decoded.username){
            next();
        }else{
            res.json({
                message : "Sorry User is not authenicated"
            })
        }
    }catch(error){
        res.json({
            message : "wrong inputs"
        })
    }
}

module.exports = userMiddleware;
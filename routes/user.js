const { Router } = require("express");
const { User } = require("../db");
const jwt = require('jsonwebtoken');
const router = Router();
const userMiddleware = require("../middleware/user");
const JWT_SECRET = "12345"


// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        await User.create({
            username : username,
            password : password
        })
        res.status(200).json({
            message : "User has created successfully"
        })
    }catch(error){
        res.json({
            message : error.message, 
            error : error.code 
        })
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({
            username,
            password
        })
        if(user){
            var token = jwt.sign({username : username}, JWT_SECRET);
            res.json({
                token : token
            })
        }
    }catch(error){
        res.json({
            message : error.message,
            error : error.code
        })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
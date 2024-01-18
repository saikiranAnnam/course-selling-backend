const { Router } = require("express");
const { User, Course } = require("../db");
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    

    try{
        const decoded = jwt.verify(jwtToken, JWT_SECRET);
        const user = decoded.username;
        if(user){
            await User.updateOne({
                username : user
            }, {
                "$push" : {
                    purchasedCourses : courseId
                }
            })
            res.json({
                message: "Purchase complete!"
            })
        }else{
            res.json({
                message : "user not found"
            })
        }
    }catch(error){
        res.json({
            message : "Error in purchasing !!!"
        })
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decoded = jwt.verify(jwtToken, JWT_SECRET);
    const header_user = decoded.username;
    
    const user = await User.findOne({
        username: header_user
    });
    
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router
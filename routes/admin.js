const { Router } = require('express');
const { Admin, Course, User } = require('../db');
const jwt = require('jsonwebtoken');
const AdminMiddleware = require('../middleware/admin');
const router = Router();
const JWT_SECRET = "12345"

router.post('/signup', async(req, res) =>{
    // admins signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        await Admin.create({
            username : username, 
            password : password
        })
        res.status(200).json({
            message : "Admin has created successfully"
        })
    }catch(err){
        res.json({
            message : err.message,
            error : err.code
        })
    }
});

router.post('/signin', async(req, res) =>{
    // admin signIn logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        const user = await Admin.findOne({
            username, 
            password
        })
        if(user){
            var token = jwt.sign({username: username}, JWT_SECRET);
            res.json({
                token : token
            })
        }else{
            res.json({
                message : "Admin not found !!!"
            })
        }
    }catch(error){
        res.json({
            message : error.message,
            code : errror.code
        })
    }
    
});

router.post('/courses', AdminMiddleware, (req, res) =>{
    // course creation logic    
});

router.get('/courses', AdminMiddleware, (req, res) =>{
    // admin accessing the all courses logic implmenation
})

module.exports = router;
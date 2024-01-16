const { Router } = require('express');
const { Admin, Course } = require('../db');
const AdminMiddleware = require('../middleware/admin');
const router = Router();


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

router.post('/signin', AdminMiddleware, (req, res) =>{
    // admin signIn logic

});

router.post('/courses', AdminMiddleware, (req, res) =>{
    // course creation logic

});

router.get('/courses', AdminMiddleware, (req, res) =>{
    // admin accessing the all courses logic implmenation
})

module.exports = router;
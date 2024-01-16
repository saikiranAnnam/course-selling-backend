const { Router } = require('express');
const { Admin, Course } = require('../db');
const AdminMiddleware = require('../middleware/admin');
const router = Router;


router.post('/signup', (req, res) =>{
    // admins signup logic
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


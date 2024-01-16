const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./middleware/admin');
const userRouter = require('./middleware/user');

//middleware for parsing request bodies
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server running in the PORT  ${PORT}`);
})


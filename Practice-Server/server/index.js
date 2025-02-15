require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const globalCatch = require('../utility/globalCatch'); 
const connectDB = require('./connectDB');

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Your Practice Server is Running !!!');
});


//To-Do App Routes
app.use('/api/v1/to-do/users', require('../to-do/routes/userRoute'));
app.use('/api/v1/to-do/tasks', require('../to-do/routes/taskRoute'));



// Use global error handler (without calling it)
app.use(globalCatch);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
connectDB();

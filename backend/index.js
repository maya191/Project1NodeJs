const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');

//const authController = require('./controllers');
const empController = require('./Controllers/employeeController')
const depController = require('./Controllers/departmentController')
const authController= require('./Controllers/authController')


const app = express();
const PORT = 3000;
connectDB();

app.use(cors());
app.use(express.json());

app.use('/employees',empController);
app.use('/departments', depController);
app.use('/login', authController)
//app.use('/');

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});

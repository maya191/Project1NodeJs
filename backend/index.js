const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

const empController = require("./Controllers/employeeController");
const depController = require("./Controllers/departmentController");
const authController = require("./Controllers/authController");
const shiftController = require("./Controllers/shiftsController");
const checkAuthController = require("./Controllers/checkAuthController");

const app = express();
const PORT = 3000;
connectDB();

app.use(cors());
app.use(express.json());

//middelware to check the token
app.use("/", checkAuthController);

app.use("/employees", empController);
app.use("/departments", depController);
app.use("/login", authController);
app.use("/shifts", shiftController);
//app.use('/');

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});

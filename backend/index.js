const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

const empController = require("./Controllers/employeeController");
const depController = require("./Controllers/departmentController");
const authController = require("./Controllers/authController");
const shiftController = require("./Controllers/shiftsController");
const checkAuthController = require("./Controllers/checkAuthController");
const actionsCheck = require("./Controllers/actionsController"); // Importing actionsCheck middleware function
const resetUserActions = require("./Controllers/resetController"); // Importing function to reset actions at midnight

const app = express();
const PORT = 3000;
connectDB();

app.use(cors());
app.use(express.json());

// Middleware to reset actions for all users only at midnight
setInterval(resetUserActions, 10 * 60 * 1000);

// Middleware to check the token
app.use("/", checkAuthController);

// Routes with actionsCheck middleware
app.use("/employees", actionsCheck, empController);
app.use("/departments", actionsCheck, depController);
app.use("/shifts", actionsCheck, shiftController);

// Login route without actionsCheck middleware
app.use("/login", authController);

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});

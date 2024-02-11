const express = require("express");
const jwt = require("jsonwebtoken");
const shiftService = require("../Services/shiftsService");
// Entry Point: http://localhost:3000/shifts
const Router = express.Router();
const SECRET_KEY = "secret-key";

Router.put("/addShiftToEmp", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const { shiftId, employeeId } = req.body;
      const status = await shiftService.addShiftToEmployee(shiftId, employeeId);
      console.log(status);
      return res.json({ status });
    }
  });
});

Router.put("/UpdateShift/:id", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const id = req.params.id;
      const shift = req.body;
      const status = await shiftService.updateShift(id, shift);
      //console.log(status);
      return res.json({ status });
    }
  });
});

Router.post("/addShift", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const shift = req.body;
      const status = await shiftService.addShift(shift);
      return res.json({ status });
    }
  });
});

module.exports = Router;

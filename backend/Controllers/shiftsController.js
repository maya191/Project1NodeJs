const express = require("express");
const jwt = require("jsonwebtoken");
const shiftService = require("../Services/shiftsService");
// Entry Point: http://localhost:3000/shifts
const Router = express.Router();

Router.put("/addShiftToEmp", async (req, res) => {
  const { shiftId, employeeId } = req.body;
  const status = await shiftService.addShiftToEmployee(shiftId, employeeId);
  return res.json({ status });
});

Router.put("/UpdateShift/:id", async (req, res) => {
  const id = req.params.id;
  const shift = req.body;
  const status = await shiftService.updateShift(id, shift);
  return res.json({ status });
});

Router.post("/addShift", async (req, res) => {
  const shift = req.body;
  const status = await shiftService.addShift(shift);
  return res.json({ status });
});

module.exports = Router;

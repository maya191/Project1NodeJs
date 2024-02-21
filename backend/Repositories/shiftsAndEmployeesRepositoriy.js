const ShiftsAndEmployees = require("../Models/ShiftsAndEmployees");

const getAllShiftsAndEmployees = () => {
  return ShiftsAndEmployees.find();
};

const addShiftToEmployee = async (obj) => {
  shif = new ShiftsAndEmployees(obj);
  await shif.save();
  return "New Shift Added To Employee!";
};
module.exports = {
  getAllShiftsAndEmployees,
  addShiftToEmployee,
};

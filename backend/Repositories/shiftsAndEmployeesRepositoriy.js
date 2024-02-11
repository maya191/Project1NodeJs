const ShiftsAndEmployees = require("../Models/ShiftsForEmployeesModel");

const getAllShiftsAndEmployees = (id) => {
  return ShiftsAndEmployees.find(id);
};

module.exports = {
  getAllShiftsAndEmployees,
};

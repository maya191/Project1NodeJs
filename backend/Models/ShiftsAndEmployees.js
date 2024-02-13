const mongoose = require("mongoose");
const ShiftsAndEmployeesSchema = new mongoose.Schema(
  {
    EmployeeId: String,
    ShiftId: [String],
  },
  { versionKey: false }
);

const shiftsForEmployees = mongoose.model(
  "ShiftsAndEmployees",
  ShiftsAndEmployeesSchema,
  "ShiftsAndEmployees"
);

module.exports = shiftsForEmployees;

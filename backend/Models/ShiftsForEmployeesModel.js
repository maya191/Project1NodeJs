const mongoose = require('mongoose');
const shiftsForEmployeesSchema = new mongoose.Schema(
  {
    EmployeeId:String,
    ShiftId:[String]
  },
  { versionKey: false }
);

const shiftsForEmployees = mongoose.model('ShiftsAndEmployees', shiftsForEmployeesSchema, 'ShiftsAndEmployees');

module.exports = shiftsForEmployees;

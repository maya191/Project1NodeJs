const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema(
  {
    FirstName: String,
    LastName:String,
    StartWorkYear:Number,
    DepartmentID : String
  },
  { versionKey: false }
);

const Employee = mongoose.model('Employee', EmployeeSchema, 'Employees');

module.exports = Employee;

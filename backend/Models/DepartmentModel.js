const mongoose = require('mongoose');
const DepartmentSchema = new mongoose.Schema(
  {
    Name: String,
    Manager : String,
  },
  { versionKey: false }
);

const Department = mongoose.model('Department', DepartmentSchema, 'Departments');

module.exports = Department;

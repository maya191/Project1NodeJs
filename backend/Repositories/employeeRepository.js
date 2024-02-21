const Employee = require("../Models/EmployeeModel");

const getAllEmployees = () => {
  return Employee.find();
};

const getEmployeebyId = (id) => {
  return Employee.findById(id);
};
const updateEmployee = async (id, obj) => {
  await Employee.findByIdAndUpdate(id, obj);
  return "Employee Updated!";
};
const addEmployee = async (emp) => {
  emp = new Employee(emp);
  await emp.save();
  return "New Employee Added!";
};
const deleteEmployee = async (id) => {
  await Employee.findByIdAndDelete(id);
  return "Employee Deleted!";
};
const getEmployeesByDep = async (dep) => {
  return await Employee.find(dep);
};

module.exports = {
  getAllEmployees,
  getEmployeebyId,
  updateEmployee,
  addEmployee,
  deleteEmployee,
  getEmployeesByDep,
};

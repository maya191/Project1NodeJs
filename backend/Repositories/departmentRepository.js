const Department = require("../Models/DepartmentModel");

const getAllDepartments = () => {
  return Department.find();
};

const geDepartmentbyId = (id) => {
  return Department.findById(id);
};

const getDepartmentByName = (depName) => {
  return Department.find(depName);
};
const updateDepartment = async (id, obj) => {
  await Department.findByIdAndUpdate(id, obj);
  return "Department Updated!";
};
const addDepartment = async (newDepartment) => {
  newDepartment = new Department(newDepartment);
  await newDepartment.save();
  return "New Department Added!";
};

module.exports = {
  getAllDepartments,
  geDepartmentbyId,
  getDepartmentByName,
  updateDepartment,
  addDepartment,
};

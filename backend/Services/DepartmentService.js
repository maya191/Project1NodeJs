const Department = require("../Models/DepartmentModel");
const departmentRepository = require("../Repositories/departmentRepository");
const employeeRepository = require("../Repositories/employeeRepository");

// A Table with all Departments data. Each row presents :
//Department name,
//Department manager name,
//and a list of Employees names work in that department.

const getAllDes = async () => {
  const Employees = await employeeRepository.getAllEmployees();
  const Departments = await departmentRepository.getAllDepartments();

  try {
    const employeeData = Departments.map((department) => {
      // Find manager of the department
      const departmentManager = Employees.find((employee) => {
        return employee._id.toString() === department.Manager;
      });

      // Get employees working in this department
      const departmentEmployees = Employees.filter(
        (emp) => emp.DepartmentID === department._id.toString()
      );

      // Extract employee names
      const employeeNames = departmentEmployees.map(
        (emp) => `${emp.FirstName} ${emp.LastName}`
      );
      // Return a combined object
      return {
        departmentName: department.Name,
        departmentManager: departmentManager
          ? `${departmentManager.FirstName} ${departmentManager.LastName}`
          : "Unknown Manager",
        employeeNames: employeeNames,
      };
    });

    return employeeData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }

  /* return {
    DepartmentName: departments.name,
    DepartmentManager: emp
      ? `${employees.FirstName} ${employees.LastName}`
      : "Unknown",
    employeesInDepartment: JSON.stringify(empsArr),
  }; */
};

const EditDepartment = async (depId, newDep) => {
  return await departmentRepository.updateDepartment(depId, newDep);
};
const geDepartmentbyId = async (depID) => {
  return await departmentRepository.geDepartmentbyId(depID);
};
const addDepartment = async (depObj) => {
  return await departmentRepository.addDepartment(depObj);
};

module.exports = {
  getAllDes,
  EditDepartment,
  geDepartmentbyId,
  addDepartment,
};

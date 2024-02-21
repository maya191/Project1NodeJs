const EmployeeRepo = require("../Repositories/employeeRepository");
const ShiftsRepo = require("../Repositories/shiftRepository");
const ShiftsAndEmployeesRepo = require("../Repositories/shiftsAndEmployeesRepositoriy");
const DepartmentRepo = require("../Repositories/departmentRepository");

const getEmployeeData = async () => {
  try {
    // Fetch data from repositories
    const Employees = await EmployeeRepo.getAllEmployees();
    const shifts = await ShiftsRepo.getAllShifts();
    const ShiftsAndEmployees =
      await ShiftsAndEmployeesRepo.getAllShiftsAndEmployees();
    const Department = await DepartmentRepo.getAllDepartments();
    // map the data
    const employeeData = Employees.map((employee) => {
      // Find employee's department
      const department = Department.find((dep) => {
        return dep._id.toString() === employee.DepartmentID;
      });
      // Find employee's shifts
      const shiftsArr = [];
      const employeeShifts = ShiftsAndEmployees.filter(
        (saes) => saes.EmployeeId === employee._id.toString()
      ).map((saes) => {
        saes.ShiftId.forEach((element) => {
          const shift = shifts.find(
            (shift) => shift._id.toString() === element
          );
          shiftsArr.push({
            Date: shift.Date,
            startHour: shift.StartingHour,
            EndHour: shift.EndingHour,
          });
        });
        return shiftsArr;
      });

      // Return a combined object
      return {
        id: employee._id,
        fullName: `${employee.FirstName} ${employee.LastName}`,
        department: department ? department.Name : "Unknown Department",
        //shifts: JSON.stringify(shiftsArr)
        shifts: shiftsArr.map((shift) => ({
          Date: shift.Date,
          startHour: shift.startHour,
          EndHour: shift.EndHour,
        })),
      };
    });
    return employeeData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const getEmpsByDep = async (dep) => {
  try {
    const employeesData = await getEmployeeData();
    const empsByDep = employeesData.filter((res) => res.department === dep);
    return empsByDep;
  } catch (error) {
    console.error("Error:", error);
  }
};
const updateEmployee = async (id, empObj) => {
  try {
    const status = await EmployeeRepo.updateEmployee(id, empObj);
    return status;
  } catch (error) {
    console.error("Error:", error);
  }
};

const addEmployee = async (emp) => {
  try {
    return await EmployeeRepo.addEmployee(emp);
  } catch (error) {
    console.error("Error:", error);
  }
};

const deleteEmployee = async (id) => {
  try {
    return await EmployeeRepo.deleteEmployee(id);
  } catch (error) {
    console.error("Error:", error);
  }
};
module.exports = {
  getEmployeeData,
  updateEmployee,
  getEmpsByDep,
  addEmployee,
  deleteEmployee,
};

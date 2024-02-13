const shiftRepository = require("../Repositories/shiftRepository");
const ShiftsAndEmployees = require("../Repositories/shiftsAndEmployeesRepositoriy");
const EmployeesRepositoriy = require("../Repositories/employeeRepository");

const addShift = async (obj) => {
  await shiftRepository.addShift(obj);
  return "Added!";
};
const updateShift = async (id, obj) => {
  await shiftRepository.updateShift(id, obj);
  return "Updated!";
};

const addShiftToEmployee = async (shiftId, empId) => {
  const empCheck = await EmployeesRepositoriy.getEmployeebyId(empId);
  const shiftCheck = await shiftRepository.getShiftbyId(shiftId);
  if (!empCheck) {
    return "employee not found!";
  }
  if (!shiftCheck) {
    return "shift not found!";
  }

  const existingAllocation =
    await ShiftsAndEmployees.getAllShiftsAndEmployees();
  const empShifts = existingAllocation.find((obj) => {
    return obj.EmployeeId === empId;
  });

  if (empShifts) {
    // If the employee is already allocated to this shift, update the ShiftId array
    empShifts.ShiftId.push(shiftId);
    await empShifts.save();
    return "New shift added to the employee";
  } else {
    // If the employee is not yet allocated to this shift, create a new entry
    const obj = {
      EmployeeId: empId,
      ShiftId: [shiftId],
    };
    await ShiftsAndEmployees.addShiftToEmployee(obj);
    return "New employee and shifts added to the DB";
  }
};

module.exports = {
  addShift,
  updateShift,
  addShiftToEmployee,
};

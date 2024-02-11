const shiftRepository = require("../Repositories/shiftRepository");
const ShiftsAndEmployees = require("../Repositories/shiftsAndEmployeesRepositoriy");

const addShift = async (obj) => {
  await shiftRepository.addShift(obj);
  return "Added!";
};
const updateShift = async (id, obj) => {
  await shiftRepository.updateShift(id, obj);
  return "Updated!";
};
const addShiftToEmployee = async (shiftId, empId) => {
  const existingAllocation = await ShiftsAndEmployees.getAllShiftsAndEmployees({
    empId,
  });
  console.log(existingAllocation);
  if (existingAllocation) {
    // If the employee is already allocated to this shift, update the ShiftId array
    existingAllocation.ShiftId.push(shiftId);
    await existingAllocation.save();
  } else {
    // If the employee is not yet allocated to this shift, create a new entry
    const newAllocation = new ShiftsAndEmployees({
      EmployeeId: empId,
      ShiftId: [shiftId],
    });
    await newAllocation.save();
  }
  return "Added!";
};

module.exports = {
  addShift,
  updateShift,
  addShiftToEmployee,
};

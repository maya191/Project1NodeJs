const Shift = require("../models/ShiftModel");

const getAllShifts = () => {
  return Shift.find();
};

const getShiftbyId = (id) => {
  return Shift.findById(id);
};
const updateShift = (id, obj) => {
  return Shift.findByIdAndUpdate(id, obj);
};
const addShift = async (obj) => {
  shif = new Shift(obj);
  await shif.save();
  return "New Shift Added!";
};

module.exports = {
  getAllShifts,
  getShiftbyId,
  updateShift,
  addShift,
};

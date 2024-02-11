const mongoose = require("mongoose");
const ShiftSchema = new mongoose.Schema(
  {
    Date: String,
    StartingHour: Number,
    EndingHour: Number,
  },
  { versionKey: false }
);

const Shift = mongoose.model("Shift", ShiftSchema, "Shifts");

module.exports = Shift;

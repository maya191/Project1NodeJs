const Shift =require("../models/ShiftModel");

const getAllShifts=() =>{
    return Shift.find();
}

const geShiftbyId=(id) =>{
    return Shift.findById(id);
}

module.exports=
{getAllShifts,
geShiftbyId
};
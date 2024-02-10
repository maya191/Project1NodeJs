const ShiftsAndEmployees =require("../Models/ShiftsForEmployeesModel");

const getAllShiftsAndEmployees=() =>{
    return ShiftsAndEmployees.find();
}

module.exports=
{getAllShiftsAndEmployees
};
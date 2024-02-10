const Employee =require("../Models/EmployeeModel");

const getAllEmployees=() =>{
    return Employee.find();
}

const geEmployeebyId=(id) =>{
    return Employee.findById(id);
}
const updateEmployee = async(id, obj) => {
  await Employee.findByIdAndUpdate(id, obj);
  return "Updated!"
};
const addEmployee= async(emp)=> {
   emp =new Employee(emp)
   await emp.save()
   return "Added!"
}
const deleteEmployee = async(id)=>{
  await Employee.findByIdAndDelete(id)
  return "Deleted!"
}
const getEmployeesByDep = async(dep)=>{
  return await Employee.find(dep)
}


module.exports=
{getAllEmployees,
geEmployeebyId,
updateEmployee,
addEmployee,
deleteEmployee,
getEmployeesByDep
};
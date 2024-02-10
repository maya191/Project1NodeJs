const Department = require('../Models/DepartmentModel');
const departmentRepository= require('../Repositories/departmentRepository');
const employeeRepository= require('../Repositories/employeeRepository');

// A Table with all Departments data. Each row presents :
 //Department name, 
 //Department manager name, 
 //and a list of Employees names work in that department.

const getAllDepartments=async ()=>{
    const employees= await employeeRepository.getAllEmployees();
    const departments= await departmentRepository.getAllDepartments();

    //console.log(employees)
    //console.log(departments)
    const empRes=employees.map( emp=>
        {return emp._id.toString()===departments.manager
                }        
    )
    console.log(empRes)
    
    const empsArr=[]
    departments.map(async element => {
        const emp= await employeeRepository.getEmployeesByDep(element)
        console.log(emp)
        empsArr.push(emp)
        
    });
    
    return {
        DepartmentName : departments.name,
        DepartmentManager : emp? `${employees.FirstName} ${employees.LastName}` :"Unknown",
        employeesInDepartment : JSON.stringify(empsArr)
    }

}

const EditDepartment =async(depId, newDep)=>{
    const departments=await departmentRepository.getAllDepartments();
    return departments.updateDepartment(depId, newDep)
    
}
const geDepartmentbyId = async(depID)=>{
    const departments=await departmentRepository.getAllDepartments();
    return await departments.geDepartmentbyId(depID)
}
const addDepartment = async (depObj)=>{
    const departments= departmentRepository.getAllDepartments();
    return departments.addDepartment(depObj)
}


module.exports={
    getAllDepartments,
    EditDepartment,
    geDepartmentbyId,
    addDepartment


}
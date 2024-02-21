const express = require("express");
const employeesService = require("../services/EmployeeService");
// Entry Point: http://localhost:3000/employees
const Router = express.Router();

Router.put("/UpdateEmployee/:id", async (req, res) => {
  const id = req.params.id;
  const emp = req.body;
  const status = await employeesService.updateEmployee(id, emp);
  return res.json({ status });
});

Router.post("/addEmployee", async (req, res) => {
  const emp = req.body;
  const status = await employeesService.addEmployee(emp);
  return res.json({ status });
});

Router.get("/getEmpsByDep", async (req, res) => {
  const dep = req.query.department;
  const empsByDep = await employeesService.getEmpsByDep(dep);
  res.send(empsByDep);
});

Router.delete("/deleteEmployee", async (req, res) => {
  const EmpId = req.query.id;
  const status = await employeesService.deleteEmployee(EmpId);
  res.send(status);
});

Router.get("/", async (req, res) => {
  const allEmps = await employeesService.getEmployeeData();
  res.send(allEmps);
});

module.exports = Router;

const express = require("express");
const jwt = require("jsonwebtoken");
const employeesService = require("../services/EmployeeService");
// Entry Point: http://localhost:3000/employees
const Router = express.Router();
const SECRET_KEY = "secret-key";

Router.put("/UpdateEmployee/:id", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const id = req.params.id;
      const emp = req.body;
      console.log(emp);
      const status = await employeesService.updateEmployee(id, emp);
      console.log(status);
      return res.json({ status });
    }
  });
});

Router.post("/addEmployee", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const emp = req.body;
      const status = await employeesService.addEmployee(emp);
      return res.json({ status });
    }
  });
});

Router.get("/getEmpsByDep", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided" });
  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const dep = req.query.department;
      const empsByDep = await employeesService.getEmpsByDep(dep);
      res.send(empsByDep);
    }
  });
});

Router.delete("/deleteEmployee", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const EmpId = req.query.id;
      const status = await employeesService.deleteEmployee(EmpId);
      res.send(status);
    }
  });
});

Router.get("/", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).send("No token provided");
  }
  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const allEmps = await employeesService.getEmployeeData();
      res.send(allEmps);
    }
  });
});

module.exports = Router;

const router = express.Router();

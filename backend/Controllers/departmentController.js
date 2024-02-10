const express = require("express");
const departmentService = require("../Services/DepartmentService");

const router = express.Router();

router.get("/", (req, res) => {
  //here we will check the token
  const allDeps = departmentService.getAllDepartments();
  res.send(allDeps);
});

module.exports = router;

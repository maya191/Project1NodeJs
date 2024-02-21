const express = require("express");
const departmentService = require("../Services/DepartmentService");

const router = express.Router();

router.post("/addDepartment", async (req, res) => {
  const dep = req.body;
  const status = await departmentService.addDepartment(dep);
  return res.json({ status });
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const dep = await departmentService.geDepartmentbyId(id);
  res.send(dep);
});

router.get("/", async (req, res) => {
  const allDeps = await departmentService.getAllDes();
  res.send(allDeps);
});

router.put("/UpdateDepartment/:id", async (req, res) => {
  const id = req.params.id;
  const dep = req.body;
  const status = await departmentService.EditDepartment(id, dep);
  console.log(status);
  res.send({ status });
});
module.exports = router;

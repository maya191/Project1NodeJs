const express = require("express");
const departmentService = require("../Services/DepartmentService");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "secret-key";

const router = express.Router();

router.post("/addDepartment", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const dep = req.body;
      const status = await departmentService.addDepartment(dep);
      //console.log(status);
      return res.json({ status });
    }
  });
});
router.get("/:id", async (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).send("No token provided");
  }
  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const id = req.params.id;
      const dep = await departmentService.geDepartmentbyId(id);
      res.send(dep);
    }
  });
});

router.get("/", async (req, res) => {
  //check the token
  const token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).send("No token provided");
  }
  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const allDeps = await departmentService.getAllDepartments();
      res.send(allDeps);
    }
  });
});

router.put("/UpdateDepartment/:id", (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).send("No token provided");
  }
  jwt.verify(token, SECRET_KEY, async (err, data) => {
    if (err) {
      res.status(500).send("Failed to authenticate token");
    } else {
      const id = req.params.id;
      const dep = req.body;
      const status = await departmentService.EditDepartment(id, dep);
      console.log(status);
      res.send({ status });
    }
  });
});
module.exports = router;

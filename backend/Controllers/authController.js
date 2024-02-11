const express = require("express");
const jwt = require("jsonwebtoken");

const authService = require("../Services/authService");

const router = express.Router();

// Entry Point: http://localhost:3000/login

router.post("/", async (req, res) => {
  const { username, email } = req.body;
  const token = await authService.findUserInSystem(username, email);

  if (token) {
    res.send({ accessToken: token });
  } else {
    res.status(401).send("user not found");
  }
});

module.exports = router;

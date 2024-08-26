const express = require("express");
const router = express.Router();

const { login, signup } = require("../Controllers/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);

//testing route
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to protected route for tests",
  });
});

//Protected routes
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Student Protected Route",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Admin Protected Route",
  });
});

module.exports = router;

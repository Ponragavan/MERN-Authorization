const express = require("express");
const {
  register,
  login,
  getUser,
  logout,
} = require("../controller/userController");
const { authenticate } = require("../middlewares/auth");
const { validateRegister, validateLogin } = require("../middlewares/error");
const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/user", authenticate, getUser);
router.get("/logout", logout);

module.exports = router;

const express = require("express");
const { login, register, signout } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/signout", signout);

module.exports = router;

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signin, signup } = require("../controllers/userControllers");
const authLimiter = require("../middleware/rateLimiter");

router.post(
  "/signup",
  authLimiter,
  [
    check("email").isEmail().normalizeEmail(),
    check("password").isLength({ min: 6 }),
    check("name").isLength({ min: 2 }),
  ],
  signup
);

router.post(
  "/signin",
  authLimiter,
  [check("email").isEmail().normalizeEmail(), check("password").exists()],
  signin
);

module.exports = router;
 
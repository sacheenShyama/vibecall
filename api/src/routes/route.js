const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signin, signup } = require("../controllers/userControllers");

router.post("/signup", signup);

router.post("/signin", signin);

module.exports = router;

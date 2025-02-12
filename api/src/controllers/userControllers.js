const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");

const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password, image } = req.body;
  try {
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name,email and password are required" });
    }
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const image_url =
      image ||
      "https://pics.craiyon.com/2023-06-26/b9b1a22a02414687a6ee21564052117f.webp";

    const user = await User.create({
      name,
      email,
      image: image_url,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("RTjwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 3600000,
    });
    res.json({ userId: user._id, email: user.email });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

module.exports = { signin, signup };

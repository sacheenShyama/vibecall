const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minLength: 2,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  },
  {}
);

module.exports = mongoose.model("User", userSchema);

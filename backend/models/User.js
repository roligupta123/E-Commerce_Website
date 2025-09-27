const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    // Field for password reset
    resetPasswordToken:{
      type: String,
    },
    resetPasswordExpires:{
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

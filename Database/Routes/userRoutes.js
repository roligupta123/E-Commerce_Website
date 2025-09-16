const express = require("express");
const router = express.Router();
const { registerUser, getUsers } = require("../controllers/userController");

// Register user
router.post("/register", registerUser);

// Get all users
router.get("/", getUsers);

module.exports = router;

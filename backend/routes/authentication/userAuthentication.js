const express = require("express")
const router = express.Router()
const { registerUser, loginUser, logout, refreshToken } = require("../../controller/authController")
const  authMiddleware = require("../../middleware/authMiddleware");

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", authMiddleware, logout)
router.post("/refresh", refreshToken)

module.exports = router;
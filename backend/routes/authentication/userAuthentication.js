const express = require("express")
const router = express.Router()
const { registerUser, loginUser, logout, refreshToken, forgotPassword, resetPassword } = require("../../controller/authController")
const  authMiddleware = require("../../middleware/authMiddleware");

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", authMiddleware, logout)
router.post("/refresh", refreshToken)
router.post("/forgot", forgotPassword)
router.post("/reset", resetPassword)

module.exports = router;
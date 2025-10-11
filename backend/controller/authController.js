const User = require("../models/User"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto")

const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
    },
});

async function registerUser(req, res) {
    const { username, email, password, confirm_password, role} = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
        if (!username || !email || !password || !confirm_password || !role) {
            return res.status(400).json({ message: "All fields are required" }); 
        }
        else if (password !== confirm_password) {
            return res.status(400).json({message : "Passwords are not same"})
        }
        else if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }
        else if(!emailRegex.test(email)){
            return res.status(400).json({message: "Invalid email format" })
        }

        const existingUser = await User.findOne({  email : email });

        if (existingUser) {
            return res.status(409).json({ message: "Account already exist" });
        }

        const saltRounds = 10;
        const hashedPassword =  await bcrypt.hash(password, saltRounds)

       const createUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
            role: role
        });

        const createdUser = await createUser.save();
        return res.status(201).json({message : "Account created successfully"});

    } catch (error) {
        console.error("Error while creating an account : ", error.message);
        res.status(500).json({ message: error.message });
    }
}

async function loginUser(req, res){
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({message : "All fields are required"})
        }

        const user = await User.findOne({email : email})
        if(!user){
            return res.status(401).json({message : "Account doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const refreshToken = jwt.sign(
            { email: user.email, role: user.role },
            process.env.JWT_REFRESH_SECRET, 
            { expiresIn: "7d" } 
        );

        const accessToken = jwt.sign(
            {
                email: user.email,
                role : user.role
            },
            process.env.JWT_SECRET, 
            { expiresIn: "1h" } 
        )

        return res.cookie("refreshToken", refreshToken, {
            httpOnly: true,   
            secure: true,     
            sameSite: "strict"
        }).status(200).json({
            message: "Login successfully",
            accessToken: accessToken,   
            user: { username: user.username },
            email : user.email,
            role : user.role
        });


    } catch (error) {
        console.error("Error while login into your account : ", error.message);
        res.status(500).json({ message: error.message });
    }
} 

async function refreshToken(req, res) {
    try {
        const token = req.cookies.refreshToken; 
        if (!token) 
            return res.status(401).json({ message: "Refresh token missing" });

        jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, user) => {
            if (err) 
                return res.status(403).json({ message: "Invalid or expired refresh token" });

            const newAccessToken = jwt.sign(
                { email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            return res.json({ accessToken: newAccessToken });
        });
    } catch (error) {
        console.error("Error in refresh token:", error.message);
        res.status(500).json({ message: error.message });
    }
}

async function logout(req, res) {
    res.clearCookie("refreshToken"); 
    return res.json({ message: "User logged out successfully" });
}

async function forgotPassword(req, res) {
    const { email } = req.body;
    
    try {
        if (!email) {
            return res.status(404).json({message : "Email is required"});
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({message :" Account doesn't exist"});
        }

        const resetToken = crypto.randomBytes(32).toString("hex");
        
        user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
        user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; 
        await user.save();

        const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

        await transporter.sendMail({
            from: process.env.EMAIL_FROM, 
            to: user.email,
            subject: "Password Reset Request",
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
        });

        res.json({ message: "Reset link sent to your email" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

async function resetPassword(req, res){
    const { token, newPassword } = req.body;

    try {
        if (!token || !newPassword) {
            return res.status(400).json({message : "Token and password is required..."})
        }

        const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
        
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: { $gt: Date.now() }   // expire time abhi future me ho
        });
        if (!user) {
            return res.status(400).json({ message: "Invalid ya expired token" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();
        res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : error.message})  
    }
}

module.exports = { registerUser, loginUser, refreshToken, logout, forgotPassword, resetPassword };

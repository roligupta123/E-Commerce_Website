const User = require("../models/User"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
            user: { username: user.username }
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


module.exports = { registerUser, loginUser, refreshToken, logout };

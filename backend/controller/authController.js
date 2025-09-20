const User = require("../models/User"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

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
            return res.status(409).json({ message: "Email already registered" });
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
        return res.status(201).json({message : "User registered successfully"});

    } catch (error) {
        console.error("Error in registerUser:", error);
        res.status(500).json({ message: "Server error" });
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
            return res.status(401).json({message : "Invalid email"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            {
                email: user.email,
                role : user.role
            },
            process.env.JWT_SECRET, 
            { expiresIn: "1h" } 
        )

        return res.cookie("token", token, {
            httpOnly: false,   // ❗ frontend JavaScript se read nahi hoga (secure)
            secure: true,     // only HTTPS pe send hoga
            sameSite: "strict"
        }).status(200).json({message: "Login successfully", user:{
            username : user.username
        }});

    } catch (error) {
        console.error("Error in Login User:", error);
        res.status(500).json({ message: "Server error" });
    }
} 


async function logout(req, res) {
    const blacklist = [];

    const token = req.cookies.token;
    res.clearCookie("token")
    blacklist.push(token);
    return res.json({message : "User logout successfully..."})
}


module.exports = { registerUser, loginUser, logout };

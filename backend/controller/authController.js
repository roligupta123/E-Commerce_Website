const User = require("../models/User"); // ✅ correct

const bcrypt = require("bcrypt")


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

module.exports = { registerUser };

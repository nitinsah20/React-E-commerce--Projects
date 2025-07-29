const User = require("../models/user");

// Signup
const signup = async (req, res) => {
    try {
        const { name, mobile, email, password } = req.body;
        if (!name || !mobile || !email || !password)
            return res.status(400).json({ message: "All fields required" });
        console.log("BODY RECEIVED ->", req.body);

        // Check for existing email or mobile
        const exist = await User.findOne({ email });
        if (exist) return res.status(400).json({ message: "Email already exists" });

        const exist1 = await User.findOne({ mobile });
        if (exist1) return res.status(400).json({ message: "Mobile already exists" });

       
        const userCreated = await User.create({ name, mobile, email, password });
        console.log("USER SAVED ->", userCreated);

        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ message: "Signup failed", error: err.message });
    }
};


// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email, password });
        if (!existingUser)
            return res.status(401).json({ message: "Invalid email or password" });

        res.json({ message: "Login successful" });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Login failed", error: err.message });
    }
};

module.exports = { signup, login };

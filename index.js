const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Dummy User Data testing ke liye
const dummyUser = {
    email: "shai@gmail.com",
    password: "12345"
};

// --- STUDY FLOW LOGIN API ---
app.post("/api/login", (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email aur password dono zaroori hain!"
            });
        }

        if (email === dummyUser.email && password === dummyUser.password) {
            return res.status(200).json({
                success: true,
                message: "Login successful! Study Flow me aapka swagat hai."
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Galat email ya password!"
            });
        }

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server me koi dikkat aa gayi hai."
        });
    }
}); // <--- Yahan catch block perfect band hua hai

// --- SERVER LISTEN ---
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Study Flow server running on port ${PORT}`);
});

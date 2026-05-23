const express = require('express');
const router = express.Router();

// Dummy User Data testing ke liye
const dummyUser = {
    email: "shai@gmail.com",
    password: "12345"
};

// --- STUDY FLOW LOGIN API ---
router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation check
        if (!email || !password) {
            return res.status(400).json({ message: "Email aur Password dono zaroori hain!" });
        }

        // Credentials match check
        if (email === dummyUser.email && password === dummyUser.password) {
            return res.status(200).json({
                message: "Login Successful! Welcome to Study Flow.",
                user: {
                    email: dummyUser.email
                }
            });
        } else {
            return res.status(401).json({ message: "Galat email ya password!" });
        }

    } catch (error) {
        res.status(500).json({ message: "Server error occurred!" });
    }
});

module.exports = router;
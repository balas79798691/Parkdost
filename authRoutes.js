const express = require("express");

const router = express.Router();

// Register User
router.post("/register", (req, res) => {

    res.status(201).json({
        success: true,
        message: "User Registered Successfully"
    });

});

// Login User
router.post("/login", (req, res) => {

    res.json({
        success: true,
        message: "Login Successful"
    });

});

module.exports = router;

const express = require("express");

const router = express.Router();

// Get all parking slots
router.get("/", (req, res) => {

    const slots = [

        { id: "A1", status: "Available" },
        { id: "A2", status: "Occupied" },
        { id: "A3", status: "Available" },
        { id: "A4", status: "Occupied" },

        { id: "B1", status: "Available" },
        { id: "B2", status: "Available" }

    ];

    res.json(slots);

});

// Book a parking slot
router.post("/book", (req, res) => {

    const { slot } = req.body;

    res.json({

        success: true,

        message: `Parking Slot ${slot} Booked Successfully`

    });

});

// Cancel booking
router.delete("/cancel/:slot", (req, res) => {

    res.json({

        success: true,

        message: `Booking for Slot ${req.params.slot} Cancelled`

    });

});

module.exports = router;

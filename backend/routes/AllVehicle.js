const express = require('express');
const router = express.Router();
const Vehicle = require("../models/Vehicle");

router.post("/AllVehicle", async (req, res) => {
    try {
        const data = await Vehicle.find();   
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


// const express = require('express');
// const router = express.Router();
// const Vehicle = require("../models/Vehicle");


router.post("/sellCar", async (req, res) => {
    try {
        const { carName, model, type, about } = req.body;

        // Here you can perform any necessary validation or processing with the received data
        
        // Example: Saving the car information to the database
        // Replace this with your actual logic
        const newVehicle = new Vehicle({
            carName,
            model,
            type,
            about
        });
        await newVehicle.save();

        res.status(200).json({ success: true, message: "Vehicle information saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});
// module.exports = router;


module.exports = router;

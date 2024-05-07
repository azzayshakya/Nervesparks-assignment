const express = require('express');
const router = express.Router();
const Car=require('../models/Vehicle')

router.get('/cars',async(req,res)=>{
    try{
        const cars=await Car.find({})
        console.log("hyyy")
        console.log(cars)
        res.status(200).json({ success:true,
            data:cars,
            error:null
        })
    }
    catch(e){
        console.log("err:",e)
        res.status(500).json({success:false,
            data:null,
            error:"error in cars data  reading"
        })
    }
    
})



router.post("/sellCar", async (req, res) => {
    try {
        const { name, type, model, car_info } = req.body;
        console.log(req.body)
        const newVehicle = new Car({
            name,
            model,
            type,
            car_info
        });
        await newVehicle.save();

        res.status(200).json({ success: true, message: "Vehicle information saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

module.exports = router;

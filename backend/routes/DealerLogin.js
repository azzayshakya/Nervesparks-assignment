const express = require('express');
const router = express.Router();
const Dealers = require('../models/Dealers');
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken")
const jwtSecret = "mynameisajayshakyaIamFrommyownw"

router.post('/DealerLogin', async (req, res) => {
  
    try {
        console.log("dealer login")
        const { email, password } = req.body;

        try {
           
            const user = await Dealers.findOne({ email });

            if (!user) {
                return res.status(500).json({ success: false, message: 'User not found' });
            }
            const passwordMatch = bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(500).json({ success: false, message: 'Password does not match' });
            }
        
            const jwtdata={
                    id:user.id   
            }           
            const DealerauthToken= jwt.sign(jwtdata,jwtSecret);
            

            
            return res.status(201).json({ success: true, message: 'Login successfully',DealerauthToken:DealerauthToken });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } catch (error) {
        console.error(error);
        return res.status(501).json({ success: false, message: 'Request processing failed' });
    }
});

module.exports = router;
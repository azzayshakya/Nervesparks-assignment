// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const Dealers = require('../models/Dealers');

router.post('/DealerSignup', async (req, res) => {

  const { name, email, phoneNumber, password } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await Dealers.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user
    const newUser = new Dealers({ name, email, phoneNumber, password });
    await newUser.save();

    res.status(201).json({ success: true,message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false,error: 'Internal server error' });
  }
});

module.exports = router;

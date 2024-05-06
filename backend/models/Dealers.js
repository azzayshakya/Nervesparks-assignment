// models/user.js

const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Dealer = mongoose.model('Dealer', dealerSchema);

module.exports = Dealer;

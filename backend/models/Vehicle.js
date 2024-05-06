// models/user.js

const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
//     car_id: {
//     type: String,
//     required: true
//   },
  carName: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  about:{
    type: String,
    required: true

  }
});

const Vehicle = mongoose.model('AllVehicles', VehicleSchema);

module.exports = Vehicle;
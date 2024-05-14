const mongoose = require('mongoose');

const PickupRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  flightNumber: { type: String, required: true },
  dateOfArrival: { type: Date, required: true }
  // Add more fields for the item request form if needed
});

module.exports = mongoose.model('PickupRequest', PickupRequestSchema);

const mongoose = require('mongoose');

const PickupRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  whatsappNumber: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid WhatsApp number!`
    }
  },
  flightNumber: { type: String, required: true },
  dateOfArrival: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(value) {
        return value > new Date();
      },
      message: 'Date of arrival should be a future date.'
    }
  },
  gender: { type: String, required: true },
  foodPreference: { type: String, required: true }
});

module.exports = mongoose.model('PickupRequest', PickupRequestSchema);

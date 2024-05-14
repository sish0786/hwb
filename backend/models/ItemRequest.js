const mongoose = require('mongoose');

const ItemRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  address: { type: String, required: true },
  itemsNeeded: [{ type: String, required: true }]  // Array of strings to store multiple items
});

module.exports = mongoose.model('ItemRequest', ItemRequestSchema);

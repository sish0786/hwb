const express = require('express');
const router = express.Router();
const PickupRequest = require('../models/PickupRequest'); // Make sure this matches your schema file

// POST route to create a pickup request
router.post('/', async (req, res) => {
  try {
    const newPickupRequest = new PickupRequest(req.body);
    await newPickupRequest.save();
    res.status(201).send(newPickupRequest);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Optional: Add GET, PUT, DELETE routes as needed

module.exports = router;

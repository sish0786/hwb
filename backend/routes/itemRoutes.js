const express = require('express');
const router = express.Router();
const ItemRequest = require('../models/ItemRequest');

// POST route to create an item request
router.post('/', async (req, res) => {
  try {
    const newItemRequest = new ItemRequest(req.body);
    await newItemRequest.save();
    res.status(201).send(newItemRequest);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Optional: Add GET, PUT, DELETE routes as needed

module.exports = router;

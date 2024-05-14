const express = require('express');
const router = express.Router();
const Form = require('../models/PickupRequest');

// POST route to save form data
router.post('/', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).send(form);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

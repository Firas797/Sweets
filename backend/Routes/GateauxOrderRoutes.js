const express = require('express');
const router = express.Router();
const GOrder = require('../Model/GateauxOrder');

// Endpoint to create a new Gateaux order
router.post('/create-gateaux-order', async (req, res) => {
  console.log(req.body); // Log the body to confirm it's being received
  try {
    const { name, phone, location, numberOfPeople, message } = req.body;

    // Validate input
    if (!name || !phone || !location || !numberOfPeople || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newGtxOrder = new GOrder({
      gateauxMessage: { name, phone, location, numberOfPeople, message },
    });

    await newGtxOrder.save();

    res.status(201).json({ message: 'Gateaux order created successfully.' });
  } catch (error) {
    console.error('Error creating Gateaux order:', error);
    res.status(500).json({
      message: 'An error occurred while creating the Gateaux order.',
      error: error.message,
    });
  }
});
  
// Endpoint to get all Gateaux orders
router.get('/get-gateaux-orders', async (req, res) => {
  try {
    const gateauxOrders = await GOrder.find();
    res.status(200).json(gateauxOrders);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching Gateaux orders.' });
  }
});

module.exports = router;

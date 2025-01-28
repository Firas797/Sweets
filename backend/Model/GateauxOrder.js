const mongoose = require('mongoose');

const GtxOrder = new mongoose.Schema({

  gateauxMessage: {
    name: String,
    phone: String,
    location: String,
    numberOfPeople: Number,
    message: String,
  },
  // Add any other fields as needed
});
const GOrder = mongoose.model('GOrder', GtxOrder);
module.exports = GOrder;

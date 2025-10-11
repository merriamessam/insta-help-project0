const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperature: Number,
  heartPressure: String,
  stress: String,
});

module.exports = mongoose.model('Patient', patientSchema);

const mongoose = require("mongoose");

const monitorSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  temperature: {
    type: Number,
    default: null
  },
  heartRate: {
    type: Number,
    default: null
  },
  stress: {
    type: Number,
    default: null
  },
  bloodPressure: {
    type: String, 
    default: null
  },
  oxygenLevel: {
    type: Number,
    default: null
  },
  updatedAt: {
    type: Date,
    default: Date.now
    
  }
});

module.exports = mongoose.model("Monitor", monitorSchema);

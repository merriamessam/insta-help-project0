const mongoose = require('mongoose');

// Sub-schema for patient medications
const MedicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: String, required: true }, // Example: "08:00"
  taken: { type: Boolean, default: false },
  lastTaken: { type: Date }
});

// Main patient schema
const patientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  nationalId: { type: String, unique: true, required: true },
  summary: { type: String },
  medications: [MedicationSchema],
  videoLink: { type: String },
  qrCode: { type: String }, // optional: can store generated QR code
  medicalHistory: [
    {
      condition: String,
      diagnosisDate: Date,
      notes: String
    }
  ],
  monitorData: [
    {
      heartRate: Number,
      bloodPressure: String,
      temperature: Number,
      recordedAt: { type: Date, default: Date.now }
    }
  ],
  urgentSummary: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);

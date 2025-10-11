const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Profile Information
    state: String,
    city: String,
    zip: String,
    gender: { type: String, enum: ['male', 'female', 'other'] },
    age: Number,
    contact1: String,
    contact2: String,
    weight: Number,
    height: Number,
    disease: [String],
    medicines: [String],
    aboutMe: String,

    // Authentication & Role
    role: { type: String, default: 'patient' },

    // Requests sent to doctors
    request: [
      {
        to: { type: Schema.Types.ObjectId, ref: 'Doctor' },
        message: String,
        createdAt: { type: Date, default: Date.now },
        status: {
          type: String,
          enum: ['pending', 'accepted', 'rejected'],
          default: 'pending'
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Simple validator to ensure the access code is an even number
const isEvenCode = (value) => {
  const num = parseInt(value, 10);
  return !isNaN(num) && num % 2 === 0;
};

const doctorSchema = new Schema(
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

    university: String,
    specialization: String,
    honors: String,
    ratings: { type: Number, default: 0, min: 0, max: 5 },
    yearOfExp: Number,
    aboutMe: String,

    // Authentication & Access
    role: { type: String, default: 'doctor' },
    accessCode: {
      type: String,
      required: true,
      validate: {
        validator: isEvenCode,
        message: 'Access code must be an even number.'
      }
    },
    isApproved: { type: Boolean, default: false },

    // Relations
    invitation: [
      {
        from: { type: Schema.Types.ObjectId, ref: 'Patient' },
        message: String,
        createdAt: { type: Date, default: Date.now }
      }
    ],
    appointment: [
      {
        patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
        date: Date,
        reason: String,
        status: {
          type: String,
          enum: ['pending', 'confirmed', 'completed'],
          default: 'pending'
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);

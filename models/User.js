// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['patient', 'doctor', 'admin'], default: 'patient' },
    isApproved: { type: Boolean, default: false }, // doctors require approval
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);

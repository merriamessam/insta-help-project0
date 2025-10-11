const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    type: { type: String, required: true },
    data: { type: Object },
    status: { type: String, enum: ['unresolved', 'resolved'], default: 'unresolved' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', alertSchema);

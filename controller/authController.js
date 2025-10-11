// controllers/authController.js
const Patient = require('../models/patientAuth');
const Doctor = require('../models/doctorAuth');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// Regex: access code must start & end with even digit, length 4–12
const accessCodeRegex = /^[02468][A-Za-z0-9]{2,10}[02468]$/;

// ----------------- Doctor Signup -----------------
exports.docSignup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password, name, accessCode } = req.body;

  try {
    // check access code validity
    if (!accessCodeRegex.test(accessCode)) {
      return res.status(403).json({ message: 'Invalid doctor access code format.' });
    }

    // check if doctor already exists
    const existing = await Doctor.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Doctor already exists with this email.' });
    }

    const hashedPw = await bcrypt.hash(password, 12);

    const doctor = new Doctor({
      email,
      password: hashedPw,
      name,
      role: 'doctor',
      isApproved: false, // set true if auto-approval, false if admin must approve
      accessCode
    });

    const result = await doctor.save();

    res.status(201).json({
      message: 'Doctor registered successfully. Awaiting approval.',
      userId: result._id
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// ----------------- Patient Signup -----------------
exports.patientSignup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password, name } = req.body;

  try {
    // check if patient already exists
    const existing = await Patient.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Patient already exists with this email.' });
    }

    const hashedPw = await bcrypt.hash(password, 12);

    const patient = new Patient({
      email,
      password: hashedPw,
      name,
      role: 'patient'
    });

    const result = await patient.save();

    res.status(201).json({
      message: 'Patient registered successfully!',
      userId: result._id
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// ----------------- Doctor Login -----------------
exports.docLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Doctor.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Doctor not found with this email.' });
    }

    if (!user.isApproved) {
      return res.status(403).json({ message: 'Doctor account not yet approved.' });
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
        role: 'doctor'
      },
      process.env.JWT_SECRET || 'fallbacksecret',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      token,
      userId: user._id.toString(),
      expiresIn: 3600, // in seconds
      user
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// ----------------- Patient Login -----------------
exports.patientLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Patient.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Patient not found with this email.' });
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
        role: 'patient'
      },
      process.env.JWT_SECRET || 'fallbacksecret',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      token,
      userId: user._id.toString(),
      expiresIn: 3600,
      user
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

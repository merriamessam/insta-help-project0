// routes/auth.js
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const Patient = require('../models/patientAuth');
const Doctor = require('../models/doctorAuth');
const authController = require('../controller/authController');

// Doctor Signup
router.put(
    '/docSignup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .custom((value) => {
                return Doctor.findOne({ email: value }).then((userDoc) => {
                    if (userDoc) {
                        return Promise.reject('Email already exists');
                    }
                });
            })
            .normalizeEmail(),
        body('password').trim().isLength({ min: 6 }),
        body('name').trim().not().isEmpty(),
        body('accessCode').not().isEmpty().withMessage('Access code is required')
    ],
    authController.docSignup
);

// Patient Signup
router.put(
    '/patientSignup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .custom((value) => {
                return Patient.findOne({ email: value }).then((userDoc) => {
                    if (userDoc) {
                        return Promise.reject('Email already exists');
                    }
                });
            })
            .normalizeEmail(),
        body('password').trim().isLength({ min: 6 }),
        body('name').trim().not().isEmpty()
    ],
    authController.patientSignup
);

// Login Routes
router.post('/docLogin', authController.docLogin);
router.post('/patientLogin', authController.patientLogin);

module.exports = router;

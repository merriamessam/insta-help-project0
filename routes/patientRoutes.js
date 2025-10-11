const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/is-auth');
const patientController = require('../controller/patientController');

// Doctor routes for patient
router.get('/getDoctors', isAuth, patientController.getDoctors);

// Patient profile management
router.post('/saveProfile', isAuth, patientController.saveProfile);
router.get('/getProfile', isAuth, patientController.getProfile);

// Appointments and communication
router.get('/sendRequest/:doctorId', isAuth, patientController.sendRequest);
router.get('/getAppointedDoctors', isAuth, patientController.getAppointedDoctors);
router.get('/getPrescription/:doctorId', isAuth, patientController.getPrescription);
router.post('/sendProblem/:doctorId', isAuth, patientController.sendProblem);
router.post('/saveMonitorData', isAuth, patientController.saveMonitorData);
router.get('/sendVideoRequest/:doctorId', isAuth, patientController.sendVideoRequest);
router.get("/generateQR/:patientId", isAuth, patientController.generateQR);

module.exports = router;

const Doctor = require('../models/doctorAuth');
const Patient = require('../models/patientAuth');
const Relation = require('../models/relation');
const Prescription = require('../models/prescription');
const Monitor = require('../models/monitorData'); // 🩺 بيانات الساعة الذكية
const Appointment = require('../models/appointments');
const Subscription = require('../models/subscribers');
const webpush = require('web-push');

// webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);

// 🩺 Get Doctor Profile + connected patients (with smartwatch data)
exports.getProfile = async (req, res, next) => {
  const id = req.userId;
  try {
    const profile = await Doctor.findById(id);
    const result = await Relation.find({ doctorId: id });
    const patients = [];

    for (const rel of result) {
      const patient = await Patient.findById(rel.patientId);
      const monitor = await Monitor.findOne({ patientId: rel.patientId });
      patients.push({
        profile: patient,
        monitor: monitor ? {
          temperature: monitor.temperature,
          heartRate: monitor.heartRate,
          stress: monitor.stress,
          bloodPressure: monitor.bloodPressure,
          oxygenLevel: monitor.oxygenLevel,
          updatedAt: monitor.updatedAt
        } : null
      });
    }
   
    // ✅ GET monitor data for a patient
exports.getMonitorData = async (req, res, next) => {
    const patId = req.params.patientId;
    try {
        const monitorData = await Monitor.findOne({ patientId: patId });
        if (!monitorData) {
            return res.status(404).json({ message: "No monitor data found for this patient" });
        }
        res.status(200).json({ message: "success", monitor: monitorData });
    } catch (err) {
        console.error(err);
        next(err);
    }
};

// ✅ POST/UPDATE monitor data (temperature, heart rate, etc.)
exports.updateMonitorData = async (req, res, next) => {
    const patId = req.params.patientId;
    const { temperature, heartRate, bloodPressure, stressLevel } = req.body;

    try {
        let monitorData = await Monitor.findOne({ patientId: patId });

        if (!monitorData) {
            monitorData = new Monitor({
                patientId: patId,
                temperature,
                heartRate,
                bloodPressure,
                stressLevel,
                updatedAt: new Date(),
            });
        } else {
            monitorData.temperature = temperature;
            monitorData.heartRate = heartRate;
            monitorData.bloodPressure = bloodPressure;
            monitorData.stressLevel = stressLevel;
            monitorData.updatedAt = new Date();
        }

        await monitorData.save();
        res.status(200).json({ message: "Monitor data updated successfully", monitor: monitorData });
    } catch (err) {
        console.error(err);
        next(err);
    }
};


    res.status(200).json({ message: 'success', profile, patients });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 💾 Save Doctor Profile
exports.saveProfile = async (req, res, next) => {
  const id = req.userId;
  const { location, gender, age, contact, qualification, yearOfExp, aboutMe } = req.body;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    doctor.city = location?.city;
    doctor.state = location?.state;
    doctor.zip = location?.zip ? parseInt(location.zip) : doctor.zip;
    doctor.gender = gender;
    doctor.age = parseInt(age);
    doctor.contact1 = contact?.contact1;
    doctor.contact2 = contact?.contact2;
    doctor.university = qualification?.university;
    doctor.specialization = qualification?.specialization;
    doctor.honors = qualification?.honors;
    doctor.yearOfExp = parseInt(yearOfExp);
    doctor.aboutMe = aboutMe;

    const updated = await doctor.save();
    res.status(200).json({ message: 'success', profile: updated });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 📩 Check Invitations
exports.checkInvitation = async (req, res, next) => {
  const id = req.userId;
  try {
    const doctor = await Doctor.findById(id);
    const invites = doctor.invitation || [];
    const arr = [];

    for (const invite of invites) {
      const patient = await Patient.findById(invite.from);
      arr.push(patient);
    }

    res.status(200).json({ message: 'success', invitations: arr });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// ✅ Confirm Invitation
exports.confirmInvitation = async (req, res, next) => {
  const doctorId = req.userId;
  const patientId = req.params.patientId;

  try {
    const relation = new Relation({ patientId, doctorId });
    await relation.save();

    const doctor = await Doctor.findById(doctorId);
    doctor.invitation.pop();
    await doctor.save();

    const profile = await Patient.findById(patientId);
    const monitor = await Monitor.findOne({ patientId });

    res.status(200).json({ message: 'success', profile, monitor });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 🧑‍⚕️ Get All Patients
exports.getPatients = async (req, res, next) => {
  const id = req.userId;
  try {
    const relations = await Relation.find({ doctorId: id });
    const patients = [];

    for (const rel of relations) {
      const patient = await Patient.findById(rel.patientId);
      patients.push(patient);
    }

    res.status(200).json({ message: 'success', patients });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 💊 Get Prescriptions
exports.getPrescription = async (req, res, next) => {
  const doctorId = req.userId;
  const patientId = req.params.patientId;
  try {
    const relation = await Relation.findOne({ doctorId, patientId });
    if (!relation) return res.status(404).json({ message: 'No relation found' });

    const prescription = await Prescription.findOne({ relationId: relation._id });
    res.status(200).json({
      message: 'success',
      prescriptions: prescription ? prescription.data : [],
      problems: prescription ? prescription.problem : []
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// ➕ Add Prescription + Web Push Notification
exports.addPrescription = async (req, res, next) => {
  const doctorId = req.userId;
  const patientId = req.params.patientId;
  try {
    const relation = await Relation.findOne({ doctorId, patientId });
    if (!relation) return res.status(404).json({ message: 'Relation not found' });

    const { presData, time } = req.body;
    let prescription = await Prescription.findOne({ relationId: relation._id });

    if (prescription) {
      prescription.data.push({ presData, time });
      await prescription.save();
    } else {
      prescription = new Prescription({
        relationId: relation._id,
        data: [{ presData, time }]
      });
      await prescription.save();
    }

    // 🔔 Send push notifications
    const subscriptions = await Subscription.find();
    for (const sub of subscriptions) {
      const pushConfig = {
        endpoint: sub.endpoint,
        keys: {
          auth: sub.keys.auth,
          p256dh: sub.keys.p256dh
        }
      };
      await webpush.sendNotification(
        pushConfig,
        JSON.stringify({ title: 'New Prescription', body: 'A new prescription was added.' })
      );
    }

    res.status(200).json({ message: 'success', prescription });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 📅 Check Appointment Requests
exports.checkRequest = async (req, res, next) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(doctorId);
    const appointments = doctor.appointment || [];
    const arr = [];

    for (const app of appointments) {
      const patient = await Patient.findById(app.patient);
      arr.push({ patient, date: app.date, reason: app.reason, status: app.status });
    }

    res.status(200).json({ message: 'success', appointments: arr });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 💾 Save Appointment
exports.saveAppointments = async (req, res, next) => {
  const doctorId = req.userId;
  const patientId = req.params.patientId;
  try {
    const appointment = new Appointment({
      event: req.body,
      patientId,
      doctorId
    });
    await appointment.save();

    const doctor = await Doctor.findById(doctorId);
    doctor.appointment.pop();
    await doctor.save();

    res.status(201).json({ message: 'success' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

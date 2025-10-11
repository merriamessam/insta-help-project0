const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Patient = require('./models/Patient');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to Mongo
mongoose.connect('mongodb://127.0.0.1:27017/medico', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET patient info
app.get('/api/patient/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE patient info
app.put('/api/patient/:id', async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPatient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

// server/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001; 
// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/api/patient/:id', (req, res) => {
  const patientId = req.params.id;

  const patientData = {
    id: patientId,
    temperature: 36.6,
    heartRate: 78,
    stress: 'low'
  };

  res.json(patientData);
});

app.post('/api/patient/:id', (req, res) => {
  const patientId = req.params.id;
  const data = req.body;

  console.log(`Received data for patient ${patientId}:`, data);

  res.json({ status: 'success', received: data });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

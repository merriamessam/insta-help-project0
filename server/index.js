// server/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001; // البورت اللي هيشتغل عليه السيرفر

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Route أساسي للتأكد إن السيرفر شغال
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Route لتجربة بيانات المريض
app.get('/api/patient/:id', (req, res) => {
  const patientId = req.params.id;

  // هنا ممكن تجيبي البيانات من قاعدة البيانات بعدين
  const patientData = {
    id: patientId,
    temperature: 36.6,
    heartRate: 78,
    stress: 'low'
  };

  res.json(patientData);
});

// Route لإرسال بيانات جديدة (POST)
app.post('/api/patient/:id', (req, res) => {
  const patientId = req.params.id;
  const data = req.body;

  // هنا هتحفظ البيانات في قاعدة البيانات بعدين
  console.log(`Received data for patient ${patientId}:`, data);

  res.json({ status: 'success', received: data });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

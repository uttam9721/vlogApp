// server.js

import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express with import!');
});

app.get('/about', (req, res) => {
  res.send('About page using ES Modules.');
});

app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

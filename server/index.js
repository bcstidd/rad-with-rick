const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('RAD With Rick API is STILL running 🚀');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'This came from the backend 🎯' });
  });
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
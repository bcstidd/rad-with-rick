const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// Serve static files from the Vite frontend build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Optional API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'This came from the backend 🎯' });
});

// Proper wildcard route — MUST use this format
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

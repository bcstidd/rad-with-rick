const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// API route (optional)
app.get('/api/message', (req, res) => {
  res.json({ message: 'This came from the backend 🎯' });
});

// Catch-all route to serve the frontend on any route not caught above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

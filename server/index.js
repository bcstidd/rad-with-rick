const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// === OpenAI setup ===
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// === API route for OpenAI ===
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: message }],
    });
    
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI error:', error.message);
    res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
  }
});

// === Health check route ===
app.get('/api/message', (req, res) => {
  res.json({ message: 'Server is running' });
});
// === Serve static files from the Vite build ===
app.use(express.static(path.join(__dirname, '../client/dist')));

// === Wildcard route for React SPA ===
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


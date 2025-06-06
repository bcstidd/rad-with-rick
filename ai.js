#!/usr/bin/env node

const readline = require('readline');
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What do you want help with?\n> ', async (input) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates clean, functional, bug-free JavaScript and React code for a developer using VS Code.',
        },
        {
          role: 'user',
          content: input,
        },
      ],
    });

    console.log('\n🧠 AI Response:\n');
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
});

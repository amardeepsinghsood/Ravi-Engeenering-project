// ================================================
//  Ravi Engineering – Chatbot Server (No-LLM)
//  Simple rule-based chatbot using chatbot-data.js
// ================================================

const express = require('express');
const cors    = require('cors');
const path    = require('path');

// Load chatbot knowledge base
const chatbotData = require('./chatbot-data.js');

const app = express();
app.use(cors());
app.use(express.json());

// ──────────────────────────────────────────────────
//  Core: Rule-Based Matching Engine
// ──────────────────────────────────────────────────
function getBotReply(userMessage) {
  const msg = userMessage.toLowerCase().trim();

  // Walk through FAQ entries and find first keyword match
  for (const faq of chatbotData.faqs) {
    // Skip the fallback entry (empty keywords) for now
    if (!faq.keywords || faq.keywords.length === 0) continue;

    for (const keyword of faq.keywords) {
      if (msg.includes(keyword.toLowerCase())) {
        return faq.answer;
      }
    }
  }

  // Return fallback answer (last entry with empty keywords)
  const fallback = chatbotData.faqs.find(f => !f.keywords || f.keywords.length === 0);
  return fallback
    ? fallback.answer
    : "I'm not sure about that. Please contact us at " + chatbotData.company.email + " for more details.";
}

// ──────────────────────────────────────────────────
//  API Endpoints
// ──────────────────────────────────────────────────

// 1. Chat Endpoint  →  POST /api/chat
app.post('/api/chat', (req, res) => {
  try {
    const { userMessage } = req.body;

    if (!userMessage || userMessage.trim() === '') {
      return res.status(400).json({ error: 'No message provided.' });
    }

    const reply = getBotReply(userMessage);
    res.json({ reply });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// 2. Company Info Endpoint  →  GET /api/company
//    (Lets the frontend fetch company details if needed)
app.get('/api/company', (req, res) => {
  res.json(chatbotData.company);
});

// 3. Health Check  →  GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Ravi Engineering chatbot server is running.' });
});

// ──────────────────────────────────────────────────
//  Start Server
// ──────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Ravi Engineering chatbot server running on http://localhost:${PORT}`);
  console.log(`   Chat endpoint: POST http://localhost:${PORT}/api/chat`);
});

// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample in-memory data store
let wallets = [];

// GET endpoint: health check
app.get('/', (req, res) => {
  res.send('BSC Express API is live 🚀');
});

// GET endpoint: fetch all wallets
app.get('/wallets', (req, res) => {
  res.json(wallets);
});

// POST endpoint: add a wallet
app.post('/wallets', (req, res) => {
  const { address, label } = req.body;

  if (!address) {
    return res.status(400).json({ error: 'Wallet address is required' });
  }

  const wallet = { address, label: label || 'Unnamed' };
  wallets.push(wallet);

  res.status(201).json({ message: 'Wallet added successfully', wallet });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend running 🚀', status: 'success' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Products endpoint (mock data)
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Premium Product', price: 99, description: 'High-quality premium item' },
    { id: 2, name: 'Exclusive Item', price: 149, description: 'Limited exclusive product' },
    { id: 3, name: 'Limited Edition', price: 199, description: 'Rare limited edition item' }
  ];
  res.json({ products, total: products.length });
});

// Lead form endpoint
app.post('/api/leads', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // In a real app, you would save this to a database
  console.log('New lead received:', { name, email, message });
  
  res.status(201).json({ 
    message: 'Lead submitted successfully', 
    data: { name, email }
  });
});

// Transaction endpoint (mock)
app.post('/api/transactions', (req, res) => {
  const { productId, quantity, customerInfo } = req.body;
  
  if (!productId || !quantity || !customerInfo) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // In a real app, integrate with payment gateway here
  const transactionId = `TXN-${Date.now()}`;
  
  res.status(201).json({
    message: 'Transaction processed',
    transactionId,
    status: 'pending',
    data: { productId, quantity }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

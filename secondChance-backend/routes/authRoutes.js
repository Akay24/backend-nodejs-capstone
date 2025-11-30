// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Example auth route
router.post('/login', (req, res) => {
  // For now, just return a dummy response
  res.json({ message: 'Login route working!' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register route working!' });
});

module.exports = router;
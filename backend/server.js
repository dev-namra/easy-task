// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

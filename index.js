// index.js

const express = require('express');
const path = require('path');

const app = express();

// Serve static assets 
app.use(express.static(path.join(__dirname, 'public')));

// Handle root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server 
const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);  
})
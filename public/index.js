// index.js

const express = require('express');
const app = express();

// Create public folder
// Move index.html, script.js etc into public

// Update static middleware to serve public folder
app.use(express.static('public')); 

// Other app routes 

app.get('/', (req, res) => {

  // Update path to index.html in public   
  // res.sendFile(__dirname + '/index.html');  
  res.sendFile(__dirname + '/public/index.html');

});

app.listen(3000);
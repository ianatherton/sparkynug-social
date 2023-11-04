const express = require('express');
const app = express();

console.log("Server started");
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
});

app.listen(3000);
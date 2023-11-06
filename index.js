const express = require('express');
const Gun = require('gun');

const app = express();
const gun = new Gun();

app.use(express.static('public'));
app.use(gun.server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
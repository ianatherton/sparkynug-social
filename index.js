const Gun = require('gun');
const gun = new Gun();

app.use(gun.server); 

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(3000);
// test.js

const Gun = require('gun');
const gun = Gun();

gun.get('greeting').put({text: 'Hello world!'}); 

gun.get('greeting').once(data => {
  console.log(data.text); // Prints 'Hello world!'  
});
const express = require('express');
const app = express();
const PORT = 3000;
//const db = require('../seeder.js');

app.use(express.static(__dirname + '/../public/dist'));


app.listen(PORT, () => {
    console.log('Server is listening on port ', PORT);
  }
)
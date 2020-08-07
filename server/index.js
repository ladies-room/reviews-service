const express = require('express');
const app = express();
const PORT = 3000;
const db = require('../seeder.js');
const ENDPOINT = '/'


app.use(express.static(__dirname + '/../public/dist'));

const testFunction = function(req, res, next) {
  console.log(`recived a: ${req.method} request to ${req.path}`);
  next();

}

app.use(testFunction);
app.use(express.static(__dirname + '/../public/dist'));

app.get(ENDPOINT, () => {
  //function for api query
})





app.listen(PORT, () => {
    console.log('Server is listening on port ', PORT);
  }
)
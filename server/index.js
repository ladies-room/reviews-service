const express = require('express');
const app = express();
const PORT = 3000;
const getReviews = require('../seeder.js');
const path = require('path');
const ENDPOINT = '/listings/:id/reviews';
const bodyParser = require('body-parser');




app.use(express.static(path.join(__dirname, '../public/dist')));

const testFunction = function(req, res, next) {
  console.log(`recived a: ${req.method} request to ${req.path}`);
  next();

}

app.use(testFunction);

app.use(express.static(__dirname + '/../public/dist'));
app.use(express.json());

app.get(ENDPOINT, (req, res) => {
  const id = req.params.id

  getReviews.getReviewsByLocation(id, (err, result) => {
    if(err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(result)
    }
  })
})





app.listen(PORT, () => {
    console.log('Server is listening on port ', PORT);
  }
)
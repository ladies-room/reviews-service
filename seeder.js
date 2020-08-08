const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/review_service');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});
db.dropCollection('reviews', function(err, result) {
  if (err) {
    console.log("could not drop: ", err)
  } else {
    console.log('collection dropped');
  }
})

let reviewSchema = new mongoose.Schema ({
  location_id: Number,
  name: String,
  photo: String,
  date: String,
  text: String,
  cleanliness: Number,
  comm: Number,
  check_in: Number,
  accuracy: Number,
  loc: Number,
  value: Number
});

let Review = mongoose.model('Review', reviewSchema);

let fakeReviews = [];

for (var i = 0; i < 5000; i++) {
  let fakeReview = new Review({
    location_id: faker.random.number({min:1, max:100}),
    name: faker.name.firstName(),
    photo: faker.image.avatar(),
    date: faker.date.month(),
    text: faker.lorem.sentences(),
    cleanliness: faker.random.number({min:1, max:5}),
    comm: faker.random.number({min:1, max:5}),
    check_in: faker.random.number({min:1, max:5}),
    accuracy: faker.random.number({min:1, max:5}),
    loc: faker.random.number({min:1, max:5}),
    value: faker.random.number({min:1, max:5})
  })
  fakeReviews.push(fakeReview);
}

Review.insertMany(fakeReviews)
  .then(function(){
    console.log("Data inserted")
  })
  .catch(function(error){
    console.log('error inserting data: ', error)
  });


  module.exports = {
    getReviewsByLocation: function(id, callback) {

      Review.find({ location_id: id }, (err, result) => {
        if(err) {
          callback(err);
        } else {
          callback(null, result)
        }

      })

    }

  }






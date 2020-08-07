const express = require('express');
const app = express();
const PORT = 3000;





app.listen(PORT, (err, res) => {
  if(err) {
    console.log("could not connect to server: ", err)
  } else {
    console.log('Server is running on port: ', PORT);
  }
})
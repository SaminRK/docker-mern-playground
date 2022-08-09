const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoDBUrl = "mongodb://localhost:27017/test";
mongoose.connect(mongoDBUrl);
const mongoDBConnection = mongoose.connection;
mongoDBConnection.on('error', console.error.bind(console, 'MongoDB connection error'));


app.get('/', function(req, res) {
  res.json({
    "hello": "world!!"
  });
});

app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      console.log(err);
      res.status(404);
    }
    res.json(users);
  });
});

app.post('/users', function(req, res) {
  const requestBody = req.body;
  const userDetail = {
    "first_name": requestBody["first_name"],
    "last_name": requestBody["last_name"],
    "email": requestBody["email"],
    "mobile_number": requestBody["mobile_number"]
  };
  const user = new User(userDetail);
  user.save(function(err) {
    if (err) {
      res.status(400);
    }
    console.log('Added User: ' + user);
    res.json(user);
  });
});

app.delete('/users', function(req, res) {
  const id = req.body["id"];
  User.deleteOne({_id: id}, function(error, user) {
    if (error) {
      console.log(err);
      res.status(404).send('Id cannot be found');
    }
    res.json(user);
  });
});

app.put('/users', function(req, res) {
  const requestBody = req.body;
  const id = requestBody["id"];
  const userDetail = {
    "first_name": requestBody["first_name"],
    "last_name": requestBody["last_name"],
    "email": requestBody["email"],
    "mobile_number": requestBody["mobile_number"]
  };
  User.updateOne({_id: id}, userDetail, null, function(error, user) {
    if (error) {
      console.log(err);
      res.status(404);
    }
    res.json(user);
  });
})





app.listen(port, () => {
  console.log(`Server application started on port ${port}`)
});

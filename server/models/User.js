const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  "first_name": {type: String, required: true, maxLength: 100},
  "last_name": {type: String, required: true, maxLength: 100},
  "email": {type: String, required: true, maxLength: 50},
  "mobile_number": {type: String, required: true, maxLength: 20},
});

module.exports = mongoose.model('User', UserSchema);

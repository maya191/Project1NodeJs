const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
  {
    Name: String,
    NumOfActions : Number,
    ActionsSoFar :Number,
  },
  { versionKey: false }
);

const User = mongoose.model('User', UserSchema, 'Users');

module.exports = User;

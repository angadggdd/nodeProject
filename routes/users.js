const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');



// const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/nodeProject');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },

  password: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }],
  dp: {
    type: String,
  },


});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);



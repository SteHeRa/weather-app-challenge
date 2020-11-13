const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/weather_app');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'User requires Email Address'],
    },
    password: {
      type: String,
      required: [true, 'User requires Password'],
    },
    savedCities: { type: [String] },
  },
  { autoCreate: true }
);

module.exports = mongoose.model('User', userSchema);

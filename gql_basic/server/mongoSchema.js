const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
  email: String,
  fruits: [String]
});
const User = model('User', userSchema);

module.exports = User;
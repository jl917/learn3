const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    first: 'string',
    last: 'string',
  },
  email: 'string',
});
const User = model('User', userSchema);

module.exports = User;
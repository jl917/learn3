// const db = require('./db');
const User = require('./mongoSchema');
const fs = require('fs');

module.exports = {
  Query: {
    users: async () => await User.find({}),
  },
  Mutation: {
    addUser: async (obj, args, ctx) => {
      const {first, last, email, fruits} = args;
      console.log(args)
      return await User.create(
        {
          name: { first, last, },
          email,
          fruits,
        }
      )
    }
  }
};

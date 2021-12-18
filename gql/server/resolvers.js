const db = require('./db');
const User = require('./mongoSchema');

// User.find({}, (error, res) => {
//   console.log(res)
// })

module.exports = {
  Query: {
    users: async () => await User.find({}),
  },
  Mutation: {
    addUser: async (obj, args, ctx) => {
      return await User.create(
        {
          name: { first: args.first, last: args.last },
          email: args.email
        }
      )
    }
  }
};

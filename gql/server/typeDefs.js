const { gql } = require("apollo-server");

module.exports = gql`
type Name {
  first: String
  last: String
}
type User {
  name: Name
  email: String
}
type Query {
  users: [User]
}
type Mutation {
  addUser(first: String, last: String, email: String): User
}
`
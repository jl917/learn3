const { gql } = require("apollo-server");

module.exports = gql`
scalar Upload
type File {
  filename: String!
  mimetype: String!
  encoding: String!
}
type Name {
  first: String
  last: String
}
type User {
  _id: String
  name: Name
  email: String
  fruits: [String!]
}
type Query {
  users: [User]
}
type Mutation {
  addUser(first: String, last: String, email: String, fruits: [String!]): User
}
`
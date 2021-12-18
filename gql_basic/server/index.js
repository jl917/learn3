const mongoose = require('mongoose');
mongoose.connect('mongodb://guryong.cc/gql_user');

const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const typeDefs = require('./typeDefs');
// const { loadDocuments } = require('@graphql-tools/load');
// const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
// const typeDefs = loadDocuments('./graphql/index.graphql', { loaders: [new GraphQLFileLoader()] })
const resolvers = require('./resolvers');
const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
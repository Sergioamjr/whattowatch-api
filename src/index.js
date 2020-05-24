require('./config/database');
const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const typeDefs = require('./types');
const { User } = require('./User');
const { Favorite } = require('./Favorite');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    User,
    Favorite,
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url} 🚀`);
});

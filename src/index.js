const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');

const typeDefs = gql`
  type Kittens {
    name: String
    color: String
  }

  type Query {
    hi: String
    getKitten(name: String!): Kittens
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url} 🚀`);
});

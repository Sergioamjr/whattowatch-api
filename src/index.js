require('./config/database');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const expressPlayground = require('graphql-playground-middleware-express')
  .default;
const resolvers = require('./resolvers');
const typeDefs = require('./types');
const { User } = require('./User');
const { Favorite } = require('./Favorite');
const port = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  dataSources: () => ({
    User,
    Favorite,
  }),
});

server.applyMiddleware({ app });

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen({ port }, () => {
  console.log(`🚀 Server ready ${server}`);
});

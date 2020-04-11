const { gql } = require('apollo-server');

const types = gql`
  type User {
    _id: ID
    name: String
    email: String
  }

  extend type Query {
    getUsers: [User]
    getUserById(_id: String): User
  }

  extend type Mutation {
    saveUser(name: String!, email: String!, password: String!): User
  }
`;

module.exports = types;

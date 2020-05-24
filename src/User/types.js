const { gql } = require('apollo-server');

const types = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type LoggedUser {
    _id: ID
    name: String
    email: String
    password: String
    token: String
  }

  extend type Query {
    getUsers: [User]
    getUserById(_id: String): User
    validateToken(token: String): Boolean
  }

  extend type Mutation {
    login(email: String, password: String): LoggedUser
    saveUser(name: String!, email: String!, password: String!): User
    saveUserAndSignIn(
      name: String!
      email: String!
      password: String!
    ): LoggedUser
  }
`;

module.exports = types;

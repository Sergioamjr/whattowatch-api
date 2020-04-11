const { gql } = require('apollo-server');
const userTypes = require('./User/types');

const root = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

module.exports = [root, userTypes];

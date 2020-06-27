const { gql } = require('apollo-server');

const types = gql`
  type Favorite {
    _id: ID
    userID: String
    movieID: Int
    title: String
    posterPath: String
  }

  extend type Query {
    getFavoritesByUserID(userID: String): [Favorite]
    getFavoriteById(_id: ID): Favorite
  }

  extend type Mutation {
    removeFavoriteById(_id: ID): Favorite
    saveFavorite(
      userID: String
      movieID: Int
      title: String
      posterPath: String
    ): Favorite
  }
`;

module.exports = types;

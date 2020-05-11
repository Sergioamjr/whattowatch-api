const { gql } = require('apollo-server');

const types = gql`
  type Favorite {
    _id: ID
    userID: String
    movieID: Int
    overview: String
    popularity: Float
    title: String
    posterPath: String
    backdropPath: String
    release: String
    genres: [Int]
  }

  extend type Query {
    getFavorites: [Favorite]
    getFavoriteById(_id: ID): Favorite
  }

  extend type Mutation {
    removeFavoriteById(_id: ID): Favorite
    saveFavorite(
      userID: String
      movieID: Int
      overview: String
      popularity: Float
      title: String
      posterPath: String
      backdropPath: String
      release: String
      genres: [Int]
    ): Favorite
  }
`;

module.exports = types;
const { gql } = require('apollo-server');

const types = gql`
  type Movie {
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
    getMovies: [Movie]
    getMovieById(_id: String): Movie
  }

  extend type Mutation {
    saveMovie(
      userID: String
      movieID: Int
      overview: String
      popularity: Float
      title: String
      posterPath: String
      backdropPath: String
      release: String
      genres: [Int]
    ): Movie
  }
`;

module.exports = types;

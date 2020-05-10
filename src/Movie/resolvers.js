const GetAllMovies = async (_, __, { dataSources }) => {
  return await dataSources.Movie.find();
};

const SaveMovie = async (
  _,
  {
    userID,
    movieID,
    overview,
    popularity,
    title,
    posterPath,
    backdropPath,
    release,
    genres,
  },
  { dataSources },
) => {
  const params = {
    userID,
    movieID,
    overview,
    popularity,
    title,
    posterPath,
    backdropPath,
    release,
    genres,
  };
  return await new dataSources.Movie(params).save();
};

module.exports = {
  GetAllMovies,
  SaveMovie,
};

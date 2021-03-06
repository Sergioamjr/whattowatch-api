const GetFavoritesByUserID = async (_, { userID }, { dataSources }) => {
  return await dataSources.Favorite.find({ userID });
};

const GetFavoriteById = async (_, { _id }, { dataSources }) => {
  try {
    return await dataSources.Favorite.findOne({ _id });
  } catch (err) {
    return null;
  }
};

const SaveFavorite = async (
  _,
  { userID, movieID, title, posterPath },
  { dataSources },
) => {
  const params = {
    userID,
    movieID,
    title,
    posterPath,
  };
  return await new dataSources.Favorite(params).save();
};

const RemoveFavoriteById = async (_, { _id }, { dataSources }) => {
  return await dataSources.Favorite.findOneAndDelete({ _id });
};

module.exports = {
  favoriteQueries: {
    getFavoriteById: GetFavoriteById,
    getFavoritesByUserID: GetFavoritesByUserID,
  },
  favoritesMutations: {
    removeFavoriteById: RemoveFavoriteById,
    saveFavorite: SaveFavorite,
  },
};

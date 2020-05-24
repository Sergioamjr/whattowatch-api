const {
  GetUsers,
  SaveUser,
  GetUserById,
  Login,
  ValidateToken,
} = require('./User/resolvers');
const {
  GetAllFavorites,
  SaveFavorite,
  RemoveFavoriteById,
  GetFavoriteById,
} = require('./Favorite/resolvers');

const Query = {
  getUsers: GetUsers,
  getUserById: GetUserById,
  getFavorites: GetAllFavorites,
  getFavoriteById: GetFavoriteById,
  login: Login,
  validateToken: ValidateToken,
};

const Mutation = {
  saveUser: SaveUser,
  saveFavorite: SaveFavorite,
  removeFavoriteById: RemoveFavoriteById,
};

module.exports = {
  Query,
  Mutation,
};

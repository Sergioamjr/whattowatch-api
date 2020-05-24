const {
  getUsers,
  saveUser,
  getUserById,
  login,
  validateToken,
} = require('./User/resolvers');
const {
  getFavoritesByUserID,
  saveFavorite,
  removeFavoriteById,
  getFavoriteById,
} = require('./Favorite/resolvers');

const Query = {
  getUsers,
  getUserById,
  getFavoritesByUserID,
  getFavoriteById,
  login,
  validateToken,
};

const Mutation = {
  saveUser,
  saveFavorite,
  removeFavoriteById,
};

module.exports = {
  Query,
  Mutation,
};

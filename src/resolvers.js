const {
  GetUsers,
  SaveUser,
  GetUserById,
  Login,
  ValidateToken,
} = require('./User/resolvers');
const { GetAllTasks, GetTaskById, SaveTask } = require('./Task/resolvers');
const {
  GetAllFavorites,
  SaveFavorite,
  RemoveFavoriteById,
  GetFavoriteById,
} = require('./Favorite/resolvers');

const Query = {
  getUsers: GetUsers,
  getUserById: GetUserById,
  getTasks: GetAllTasks,
  getTaskById: GetTaskById,
  getFavorites: GetAllFavorites,
  getFavoriteById: GetFavoriteById,
  login: Login,
  validateToken: ValidateToken,
};

const Mutation = {
  saveUser: SaveUser,
  saveTask: SaveTask,
  saveFavorite: SaveFavorite,
  removeFavoriteById: RemoveFavoriteById,
};

module.exports = {
  Query,
  Mutation,
};

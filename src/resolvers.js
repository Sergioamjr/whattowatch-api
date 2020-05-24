const { userQueries, userMutations } = require('./User/resolvers');
const { favoriteQueries, favoritesMutations } = require('./Favorite/resolvers');

const Query = {
  ...userQueries,
  ...favoriteQueries,
};

const Mutation = {
  ...userMutations,
  ...favoritesMutations,
};

module.exports = {
  Query,
  Mutation,
};

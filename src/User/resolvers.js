const GetUsers = async (_, __, { dataSources }) => {
  return await dataSources.User.find();
};

const GetUserById = async (_, { _id }, { dataSources }) => {
  try {
    return await dataSources.User.findOne({ _id });
  } catch (err) {
    return null;
  }
};

const SaveUser = async (_, { name, email, password }, { dataSources }) => {
  return new dataSources.User({ name, email, password }).save();
};

module.exports = {
  GetUsers,
  SaveUser,
  GetUserById,
};

const GetAllTasks = async (_, __, { dataSources }) => {
  return await dataSources.Task.find();
};

const GetTaskById = async (_, { _id }, { dataSources }) => {
  try {
    return await dataSources.Task.findOne({ _id });
  } catch (err) {
    return null;
  }
};

module.exports = {
  GetAllTasks,
  GetTaskById,
};

const { gql } = require('apollo-server');

const types = gql`
  type ProgressObject {
    progress: Int
    _id: String
  }

  type NotesObject {
    notes: Int
    _id: String
  }

  type Task {
    _id: ID
    date: String
    name: String
    title: String
    description: String
    period: String
    goal: Int
    color: String
    progress: [ProgressObject]
    notes: [NotesObject]
  }

  extend type Query {
    getTasks: [Task]
    getTaskById(_id: String): Task
  }

  type SaveTask {
    date: String!
    name: String!
    title: String!
  }

  extend type Mutation {
    saveTask(date: String!, name: String!, title: String!): Task
  }
`;

module.exports = types;

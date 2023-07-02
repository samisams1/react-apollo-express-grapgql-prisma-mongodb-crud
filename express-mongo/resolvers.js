const { Student } = require("./models/Student.js");

// GraphQL Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello from Reflectoring Blog",
    welcome: (parent, args) => `Hello ${args.name}`,
    students: async () => await Student.find({}),
    student: async (parent, args) => await Student.findById(args.id),
  },
  Mutation: {
    create: async (parent, args) => {
      const newStudent = new Student({
        first_name: args.firstName,
        last_name: args.lastName,
        age: args.age,
      });
      await newStudent.save();
      return newStudent;
    },
  },
};

module.exports = { resolvers };
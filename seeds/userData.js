const { User } = require("../models");

const userData = [
  {
    login: "CPhelps",
    password: "12345678",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

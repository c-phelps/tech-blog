const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    login: "CPhelps",
    password: bcrypt.hashSync("12345678", 10),
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

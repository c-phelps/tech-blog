const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = process.envDB_URL
  ? new Sequelize(process.env.envDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: "localhost",
      dialect: "postgres",
    });

module.exports = sequelize;

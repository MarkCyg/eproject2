const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "James Hilton",
    email: "jameshilton@gmail.com",
    password: "JAMESHILTON",
  },
  {
    username: "Percy Vere",
    email: "percyvere@yahoo.com",
    password: "PERCYVERE",
  },
  {
    username: "Jack Aranda",
    email: "jackaranda@gmail.com",
    password: "JACKARANDA",
  },
  {
    username: "Fran G. Pani",
    email: "frangpani@gmail.com",
    password: "FRANGPANI",
  },
  {
    username: "John Quil",
    email: "johnquil@yahoo.com",
    password: "JOHNQUIL",
  },
];

const seedUser = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUser;

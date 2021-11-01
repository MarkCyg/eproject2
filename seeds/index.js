const seedUser = require("./user-seeds");
const seedPost = require("./post-seeds");
const seedComments = require("./comment-seeds");
const seedTag = require("./tag-seeds");
const seedPostTags = require("./postTags-seeds");
const seedCategory = require("./category-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n-----DATABASE SYNCED ------\n");
  await seedUser();
  console.log("\n-----Users SYNCED ------\n")
  await seedTag();
  console.log("\n------Tags SYNCED ------\n")
  await seedCategory();
  console.log("\n-------Categories SYNCED ------\n")
  await seedPost();
  console.log("\n--------Posts SYNCED ------\n")
  await seedComments();
  console.log("\n------Comments SYNCED -----\n")
  await seedPostTags
  console.log("\n------PostTags SYNCED -----\n")
  
  process.exit(0);
};

seedAll();

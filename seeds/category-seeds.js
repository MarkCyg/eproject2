const { Category } = require("../models");

//Can have multiple categories for a post
const categoryData = [
  {
    category_name: "HTML",
  },
  {
    category_name: "git",
  },
  {
    category_name: "gitlab",
  },
  {
    category_name: "Other",
  },
  {
    category_name: "mySQL",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;

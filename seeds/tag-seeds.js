const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "HTML with CSS",
  },
  {
    tag_name: "Git revert",
  },
  {
    tag_name: "mySQL connect",
  },
  {
    tag_name: "Other questions",
  },
  {
    tag_name: "Git tech",
  },
];

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;

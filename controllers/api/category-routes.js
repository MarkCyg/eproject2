const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Tag, Category, PostTag } = require('../../models');

//Get all Categories
router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name'
        ],
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
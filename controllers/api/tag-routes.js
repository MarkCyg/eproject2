const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Tag, Category, PostTag } = require('../../models');
const withAuth = require('../../utils/auth');

//Get all Tags
router.get('/', (req, res) => {
    Tag.findAll({
       attributes: [
           'id',
           'tag_name'
       ],
    })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
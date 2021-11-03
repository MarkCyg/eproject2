const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const tagRoutes = require('./tag-routes');
const categoryRoutes = require('./category-routes');


router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/tags', tagRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
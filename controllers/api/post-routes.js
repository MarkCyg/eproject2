const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Tag, Category, PostTag } = require("../../models");



router.get('', (req, res) => {
   Post.findAll({
       attributes: [
           'id',
           'post_text',
           'user_id',
           'created_at',
       ],
       order: [['created_at', 'DESC']],
       include: [
           {
               model: Comment,
               attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
               include: {
                   model: User,
                   attributes: ['username']
               }
           },
           {
               model: User,
               attributes: ['username']
           }
       ]
   })
   .then(dbPostData => res.json(dbPostData))
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });

});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "user_id", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },

        attributes: [
            'id',
            'post_text',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }]
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No Post with that id Exists' });
            return;
        }
        res.json(dbPostData);

   
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
})
})


router.post('/', (req, res) => {
    Post.create({
        post_text: req.body.post_text,
        category_id: req.body.category_id,
        tag_id: req.body.tag_id,
        // EDIT THIS TO USE AUTHENTICATION
        user_id: 1
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.put('/:id', (req, res) => {
    Post.update(
        {
            post_text: req.body.post_text
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;
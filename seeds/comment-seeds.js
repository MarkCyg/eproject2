const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      'You can connect them in your HTML file by using <link rel="stylesheet>" href=" your directory to your CSS file">',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      'First, you need to checkout to another branch that you want to delete. Then you want to use the "git push origin --delete <name of the branch that you want to delet>" command.',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "The purpose of gitignore files is to ensure that certain files not tracked by git remain untracked.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      "MVP is Model View Presenter, which user inputs are handled by View which instructs the presenter to call appropriate functions. MVC is Model View Controller, which user inputs are handled by Controller which instructs the model for further operations",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text:
      'First, navigate to your root folder and start the terminal. Then type in "mysql -u root -p". After mysql> type in "source <file directory>".',
    user_id: 5,
    post_id: 5,
  },
];
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

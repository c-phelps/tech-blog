const checkUser = async (req, res, next) => {
  const blogPost = await Blog.findByPk(req.params.id);
  if (blogPost.user !== req.session.user_id) {
    return false;
  } else {
    return true;
  }
};

module.exports = checkUser;
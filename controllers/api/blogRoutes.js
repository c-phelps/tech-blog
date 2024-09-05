const router = require("express").Router();
const { Blog } = require("../../models");
const checkUser = require("../../utils/helpers");

router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    const blog = blogData.get({ plain: true });

    res.render("editBlog", { blog, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// /api/blog/id
router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    if (!blogData) {
      return res.status(404).json({ message: "Blog not found" });
    }
    const blog = blogData.get({ plain: true });

    const isUser = await checkUser(req);

    res.render("blog", { blog, is_user: isUser, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (blog[0] === 0) {
      return res.status(404).json({ message: "Blog not found or no changes made." });
    } else {
      res.status(200).json(blog);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;

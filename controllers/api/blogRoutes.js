const router = require("express").Router();
const { Blog } = require("../../models");
const checkUser = require("../utils/helpers");

router.post("/", async (req, res) => {
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

// /api/blog/id
router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    const blog = blogData.get({ plain: true });

    const isUser = await checkUser(req);

    res.render("blog", { blog, is_user: isUser });
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
      res.status(200).json(category);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

const { Blog } = require("../models");

const blogData = [
  {
    title: "TestTitle",
    body: "this is a test body for a fake thing",
    user: "TestUser123"
  },{
    title: "CPhelps Blog",
    body: "this is a test body for a fake thing 2",
    user: "CPhelps"
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
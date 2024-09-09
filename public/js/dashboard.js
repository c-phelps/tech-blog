const addBlog = async () => {
  document.location.replace("/addBlog");
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#add-blog").addEventListener("click", addBlog);
});

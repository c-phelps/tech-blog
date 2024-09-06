const postBlog = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#blogTitle").value.trim();
  const body = document.querySelector("#blogBody").value.trim();
  const user = document.querySelector("#user").value;

  if (title && body) {
    const response = await fetch(`/api/blog/`, {
      method: "POST",
      body: JSON.stringify({ title, body, user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Blog addition failed");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#add-blog-form").addEventListener("submit", postBlog);
});

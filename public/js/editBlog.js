const editBlog = async (event) => {
  event.preventDefault();
  const blogId = document.querySelector("#blogId").value;
  const title = document.querySelector("#blogTitle").value.trim();
  const body = document.querySelector("#blogBody").value.trim();

  if (title && body) {
    const response = await fetch(`/api/blog/${blogId}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace(`/api/blog/${blogId}`);
    } else {
      alert("Blog update failed");
    }
  }
};

document.querySelector("#edit-blog-form").addEventListener("submit", editBlog);

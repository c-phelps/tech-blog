document.addEventListener("DOMContentLoaded", ()=> {
    const editButton = document.querySelector("#edit-blog");
    editButton.addEventListener("click", ()=> {
        const blogSection = document.querySelector(".card");

        const blogId = blogSection.getAttribute("data-blog-id");   
        document.location.replace(`/api/blog/edit/${blogId}`);
    })
});
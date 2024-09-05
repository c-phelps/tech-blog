// utilized example login handler to create our own
const loginHandler = async (event) => {
  event.preventDefault();

  const login = document.querySelector("#login-value").value.trim();
  const password = document.querySelector("#password-value").value.trim();

  if (login && password) {
    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupHandler = async (event) => {
  event.preventDefault();

  const login = document.querySelector("#login-value").value.trim();
  const password = document.querySelector("#password-value").value.trim();

  if (login && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

// make sure the changes are loded in the DOM
document.addEventListener("DOMContentLoaded", () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = document.querySelector("#form");
    const formType = form.dataset.formType;

    if (formType === "login") {
      await loginHandler(event);
    } else if (formType === "signup") {
      await signupHandler(event);
    }
  };

  const setupFormListener = () => {
    const form = document.querySelector("#form");
    form.removeEventListener("submit", handleFormSubmit);
    form.addEventListener("submit", handleFormSubmit);
  };

  setupFormListener();

  // if the user clicks on switch to signup, change the form id to signup form
  // change the form title
  // change the button text
  // hide the switch to signup prompt
  // show the switch to login prompt
  document.querySelector("#switch-to-signup").addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("#form");
    form.dataset.formType = "signup";
    document.querySelector("#form-title").textContent = "Signup";
    document.querySelector("#form-submit").textContent = "Signup";
    document.querySelector("#switch-to-signup").style.display = "none";
    document.querySelector("#switch-to-login").style.display = "inline";
  });

  // if user clicks on switch to login, then change the form id to login-form
  // change the title content to login
  // change the button content to login
  // display the switch to signup promp
  // hide the siwtch to login prompt
  document.querySelector("#switch-to-login").addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("#form");
    form.dataset.formType = "login";
    document.querySelector("#form-title").textContent = "Login";
    document.querySelector("#form-submit").textContent = "Login";
    document.querySelector("#switch-to-signup").style.display = "inline";
    document.querySelector("#switch-to-login").style.display = "none";
  });
});

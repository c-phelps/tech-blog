// utilized example login handler to create our own
const loginHandler = async (event) => {
  event.preventDefault();

  const login = document.querySelector("#login-value").value.trim();
  const password = document.querySelector("#passowrd-value").value.trim();

  if (login && password) {
    const res = await fetch("/api/user/login", {
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
  const password = document.querySelector("#passowrd-value").value.trim();

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

document.querySelector(".login-form").addEventListener("sumbit", loginHandler);
document.querySelector(".signup-form").addEventListener("submit", signupHandler);

document.querySelector("#switch-to-signup").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#form").id = "signup-form";
  document.querySelector("#form-title").textContent = "Signup";
  document.querySelector("#form-submit").textContent = "Signup";
  document.querySelector("#switch-to-signup").style.display = "none";
  document.querySelector("#switch-to-login").style.display = "inline";
});

document.querySelector("#switch-to-login").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#form").id = "login-form";
  document.querySelector("#form-title").textContent = "Login";
  document.querySelector("#form-submit").textContent = "Login";
  document.querySelector("#switch-to-signup").style.display = "inline";
  document.querySelector("#switch-to-login").style.display = "none";
});

// todo make sure that form controls match the names here

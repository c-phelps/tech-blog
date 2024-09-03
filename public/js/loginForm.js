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

// set the query selector for assign the form ID to a variable, check if the formid = 
document.querySelector("#form").addEventListener("submit", async (event) => {
  event.preventDefault();
  // set the formid
  const formId = document.querySelector("#form").id;
  // if the formid = login-form set the event listener to the asyncronous loginHandler
  if (formId === "login-form") {
    await loginHandler(event);
  } else if (formId === "signup-form") {
    // else set the event listener to signupHandler
    await signupHandler(event);
  }
});

// if the user clicks on switch to signup, change the form id to signup form
// change the form title
// change the button text
// hide the switch to signup prompt
// show the switch to login prompt
document.querySelector("#switch-to-signup").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#form").id = "signup-form";
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
  document.querySelector("#form").id = "login-form";
  document.querySelector("#form-title").textContent = "Login";
  document.querySelector("#form-submit").textContent = "Login";
  document.querySelector("#switch-to-signup").style.display = "inline";
  document.querySelector("#switch-to-login").style.display = "none";
});

// todo make sure that form controls match the names here

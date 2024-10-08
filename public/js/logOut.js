//  utilized example logout handler to create our own
const logout = async () => {
  const res = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};
const home = async () => {
  document.location.replace("/");
};
const dashboard = async () => {
  document.location.replace("/dashboard");
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#logout").addEventListener("click", logout);
  document.querySelector("#home").addEventListener("click", home);
  document.querySelector("#dashboard").addEventListener("click", dashboard);
});

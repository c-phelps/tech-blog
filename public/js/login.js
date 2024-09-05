const logIn = async () => {
  document.location.replace("/login");
};
const home = async () => {
  document.location.replace("/");
};
document.querySelector("#login").addEventListener("click", logIn);
document.querySelector("#home").addEventListener("click", home);

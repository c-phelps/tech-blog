$(document).ready(function () {
  $("#login").on("click", function (event) {
    event.stopPropagation();
    const userName = $("#username").val();
    window.alert(`${userName}`);
  });
  $("#signup").on("click", function (event) {
    event.stopPropagation();
    const userName = $("#username").val();
    console.log("this one");
    window.alert(`${userName}: signup`);
  });
});

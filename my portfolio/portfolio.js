const clickMe = document.getElementById("hello");
const frontMe = document.getElementById("front");
console.log("This is my portfolio");
//animation\

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;

    var realtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (realtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
//email validation
$(document).ready(function () {
  const $form = $("form").val();

  //name
  $(".submit").on("click", function () {
    const $name = $("#name").val();
    if ($name === "" || $name === 0) {
      const $errorName = $("#error-message")
        .text("Name is Required")
        .addClass("error-message");
    } else {
      $("#error-message").remove();
    }
  });
});

//email
$(".submit").on("click", function () {
  const $email = $("#email").val();
  if ($email === "" || $email === 0) {
    const $errorName = $("#error-email")
      .text("Email is Required")
      .addClass("error-message");
  } else {
    $("#error-email").remove();
  }
});
//message
$(".submit").on("click", function (event) {
  const $message = $("#message").val();
  const $message1 = event.target.value;
  if ($message === "" || $message === 0) {
    const $input = $("#inputmessage")
      .text("Please Input a message")
      .addClass("error-message");
  } else {
    $("#error-email").remove();
  }
});

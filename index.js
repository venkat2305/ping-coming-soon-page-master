const notifyBtn = document.getElementById("notifybtn");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const emailInput = document.getElementById("emailinput");

function isValidEmail(email) {}

notifyBtn.addEventListener("click", () => {
  input = emailInput.value;
  if (input == "") {
    error1.style.display = "block";
  } else if (!/\S+@\S+\.\S+/.test(input)) {
    error2.style.display = "block";
  } else if (/\S+@\S+\.\S+/.test(input)) {
    alert("Thank you for subscribing");
  }
});

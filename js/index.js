function indexValidation() {
  var emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailInput = document.querySelector(".emailInput");
  var emailLabel = document.querySelector(".emailLabel");
  var passLabel = document.querySelector(".passLabel");
  var passInput = document.querySelector(".passInput");

  if (!emailVal.test(emailInput.value)) {
    emailLabel.innerHTML = "Please Enter a Valid Email ! ";
    emailLabel.classList.remove("text-primary");
    emailLabel.classList.add("red");
    return false;
  } else if (passInput.value === "" || passInput.value.length < 8) {
    emailLabel.innerHTML = "Email :";
    passLabel.innerHTML = "Please Enter a Valid Password !";
    emailLabel.classList.remove("red");
    emailLabel.classList.add("text-primary");
    passLabel.classList.remove("text-primary");
    passLabel.classList.add("red");
    return false;
  } else {
    return true;
  }
}

var passInput = document.querySelector(".passInput");
var passLabel = document.querySelector(".passLabel");
var myDiv = document.querySelector(".div");

passInput.addEventListener("focus", () => {
  if (passInput.value === "" || passInput.value.length < 8) {
    myDiv.innerHTML = "Password Must Be More Than 8 Charcters";
    passLabel.innerHTML = "Please Enter a Valid Password !";
    passLabel.classList.add("red");
    passLabel.classList.remove("text-primary");
    myDiv.classList.add("red");
    return false;
  } else {
    return true;
  }
});

passInput.addEventListener("keyup", () => {
  if (passInput.value.length >= 8) {
    myDiv.innerHTML = "Password Must Be More Than 8 Charcters";
    passLabel.innerHTML = "Password :";
    passLabel.classList.remove("red");
    passLabel.classList.add("text-primary");
    myDiv.classList.remove("red");
    myDiv.classList.add("green");
    return true;
  } else {
    myDiv.classList.add("red");
    passLabel.classList.add("red");
    return false;
  }
});

var showInput = document.querySelector(".showInput");
var passInput = document.querySelector(".passInput");

showInput.addEventListener("click", () => {
  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
});

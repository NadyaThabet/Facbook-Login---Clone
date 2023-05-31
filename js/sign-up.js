function signupForm() {
  var firstLabel = document.querySelector(".fNameLabel");
  var firstInput = document.querySelector(".fNameInput");
  var lastLabel = document.querySelector(".lNameLabel");
  var lastInput = document.querySelector(".lNameInput");
  var emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailLabel = document.querySelector(".emailLabel");
  var emailInput = document.querySelector(".emailInput");
  var phoneVal = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var phoneLabel = document.querySelector(".phoneLabel");
  var phoneInput = document.querySelector(".phoneInput");
  var passLabel = document.querySelector(".passLabel");
  var passInput = document.querySelector(".passInput");
  var confPassLabel = document.querySelector(".confPassLabel");
  var confPassInput = document.querySelector(".confPassInput");
  var genderLabel = document.querySelector(".genderLabel");
  var genderInput = document.querySelector(".genderInput");
  var birthdateLabel = document.querySelector(".birthdateLabel");
  var birthdateInput = document.querySelector(".birthdateInput");

  if (firstInput.value === "" || !isNaN(firstInput.value)) {
    firstLabel.innerHTML = "Please Enter a Valid Name !";
    firstLabel.classList.remove("text-primary");
    firstLabel.classList.add("red");
    console.log(firstLabel);
    return false;
  } else if (lastInput.value === "" || !isNaN(lastInput.value)) {
    firstLabel.innerHTML = "First Name :";
    lastLabel.innerHTML = "Please Enter a Valid Name !";
    firstLabel.classList.remove("red");
    firstLabel.classList.add("text-primary");
    lastLabel.classList.remove("text-primary");
    lastLabel.classList.add("red");
    return false;
  } else if (!emailVal.test(emailInput.value)) {
    firstLabel.innerHTML = "First Name :";
    lastLabel.innerHTML = "Last Name :";
    emailLabel.innerHTML = "Please Enter a Valid Email ! ";
    lastLabel.classList.remove("red");
    lastLabel.classList.add("text-primary");
    emailLabel.classList.remove("text-primary");
    emailLabel.classList.add("red");
    return false;
  } else if (
    phoneInput.value === "" ||
    isNaN(phoneInput.value) ||
    !phoneVal.test(phoneInput.value)
  ) {
    firstLabel.innerHTML = "First Name :";
    lastLabel.innerHTML = "Last Name :";
    emailLabel.innerHTML = "Email :";
    phoneLabel.innerHTML = "Please Enter a Valid Phone Number !";
    emailLabel.classList.remove("red");
    emailLabel.classList.add("text-primary");
    phoneLabel.classList.remove("text-primary");
    phoneLabel.classList.add("red");
    return false;
  } else if (passInput.value === "" || passInput.value.length < 8) {
    firstLabel.innerHTML = "First Name :";
    lastLabel.innerHTML = "Last Name :";
    emailLabel.innerHTML = "Email :";
    phoneLabel.innerHTML = "Phone Number :";
    passLabel.innerHTML = "Please Enter a Valid Password !";
    phoneLabel.classList.remove("red");
    phoneLabel.classList.add("text-primary");
    passLabel.classList.remove("text-primary");
    passLabel.classList.add("red");
    return false;
  } else if (
    confPassInput.value === "" ||
    confPassInput.value !== passInput.value
  ) {
    firstLabel.innerHTML = "First Name :";
    lastLabel.innerHTML = "Last Name :";
    emailLabel.innerHTML = "Email :";
    phoneLabel.innerHTML = "Phone Number :";
    passLabel.innerHTML = "Password :";
    confPassLabel.innerHTML = "Password Doesn't Match !";
    passLabel.classList.remove("red");
    passLabel.classList.add("text-primary");
    confPassLabel.classList.remove("text-primary");
    confPassLabel.classList.add("red");
    return false;
  } else if (genderInput.checked == false) {
    firstLabel.innerHTML = "First Name :";
    lastLabel.innerHTML = "Last Name :";
    emailLabel.innerHTML = "Email :";
    phoneLabel.innerHTML = "Phone Number :";
    passLabel.innerHTML = "Password :";
    confPassLabel.innerHTML = "Confirm Password :";
    genderLabel.innerHTML = "Gender Must Be Selected";
    confPassLabel.classList.remove("red");
    confPassLabel.classList.add("text-primary");
    genderLabel.classList.remove("text-primary");
    genderLabel.classList.add("red");
    return false;
  } else if (birthdateInput.value === "") {
    firstLabel.innerHTML = "First Name :";
    lastLabel.innerHTML = "Last Name :";
    emailLabel.innerHTML = "Email :";
    phoneLabel.innerHTML = "Phone Number :";
    passLabel.innerHTML = "Password :";
    confPassLabel.innerHTML = "Confirm Password :";
    genderLabel.innerHTML = "Gender :";
    birthdateLabel.innerHTML = " Birthdate Must Be Selected !";
    genderLabel.classList.remove("red");
    genderLabel.classList.add("text-primary");
    birthdateLabel.classList.remove("text-primary");
    birthdateLabel.classList.add("red");
    return false;
  } else {
    return true;
  }
}

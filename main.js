let submit = document.querySelector("button");

// check first name:
let firstName = document.querySelector("input#first-name");
let errIconFname = document.querySelector("div.error-icon-fname");
let fnameLabel = document.querySelector("label.fname");

firstName.onkeyup = function () {
  if (firstName.value === "") {
    errIconFname.style.cssText = "visibility:visible;";
    fnameLabel.style.cssText = "display:block;";
  } else {
    errIconFname.style.cssText = "visibility:hidden;";
    fnameLabel.style.cssText = "display:none;";
  }
};

// check last name:
let lastName = document.querySelector("input#last-name");
let errIconLname = document.querySelector("div.error-icon-lname");
let lnameLabel = document.querySelector("label.lname");

lastName.onkeyup = function () {
  if (lastName.value === "") {
    errIconLname.style.cssText = "visibility:visible;";
    lnameLabel.style.cssText = "display:block;";
  } else {
    errIconLname.style.cssText = "visibility:hidden;";
    lnameLabel.style.cssText = "display:none;";
  }
};

// check email address:
let emailField = document.querySelector("input#address");
let errIconAddress = document.querySelector("div.error-icon-adress");
let emptyLabel = document.querySelector("label.empty-email");
let wrongLabel = document.querySelector("label.wrong-email");

emailField.onkeyup = function () {
  if (emailField.value === "") {
    errIconAddress.style.cssText = "visibility:visible;";
    emptyLabel.style.cssText = "display:block;";
    wrongLabel.style.cssText = "display:none;";
  } else if (emailField.validity.valid === false) {
    errIconAddress.style.cssText = "visibility:visible;";
    emptyLabel.style.cssText = "display:none;";
    wrongLabel.style.cssText = "display:block;";
  } else {
    errIconAddress.style.cssText = "visibility:hidden;";
    emptyLabel.style.cssText = "display:none;";
    wrongLabel.style.cssText = "display:none;";
  }
};
// check password:
let passwordField = document.querySelector("input#password");
let errIconpass = document.querySelector("div.error-icon-pass");
let passLabel = document.querySelector("label.pass");

passwordField.onkeyup = function () {
  if (passwordField.value === "") {
    errIconpass.style.cssText = "visibility:visible;";
    passLabel.style.cssText = "display:block;";
  } else {
    errIconpass.style.cssText = "visibility:hidden;";
    passLabel.style.cssText = "display:none;";
  }
};
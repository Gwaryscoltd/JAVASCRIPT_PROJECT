// fetching the elements from the dom
const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// input error function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// showSuccess
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//email validator
function emailValidator(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // return re.test(String(email).toLowerCase());
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "email is not valid");
  }
}
// check required inputs
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldId(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// check length of username and password
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldId(input)} is less than ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldId(input)} is greater than ${max}`);
  } else {
    showSuccess(input);
  }
}
// check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "password does not match");
  } else {
    showSuccess(input2);
  }
}
// function to get input field pulled out by id name
function getFieldId(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// add event listener for the click activity on submit button
form.addEventListener("click", function (e) {
  e.preventDefault();
  /*checking the required field using if statement  */
  // if (!username.value) {
  //   showError(username, "username is required");
  // } else {
  //   showSuccess(username);
  // }
  // if (!email.value) {
  //   showError(email, "email is required");
  // } else if (!emailValidator(email.value)) {
  //   showError(email, "email is not valid");
  // } else {
  //   showSuccess(email);
  // }
  // if (!password.value) {
  //   showError(password, "password is required");
  // } else {
  //   showSuccess(password);
  // }
  // if (!password2.value) {
  //   showError(password2, "password2 is required");
  // } else {
  //   showSuccess(password2);
  // }
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 6, 25);
  emailValidator(email);
  checkPasswordMatch(password, password2);
});

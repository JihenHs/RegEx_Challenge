//get the form elements.
const name = document.getElementById("name");
const wrongname = document.getElementById("wrongname");
const wrongpwd = document.getElementById("wrongpwd");
const wrongphone = document.getElementById("wrongphone");
const btn = document.getElementById("btn");

const wrongemail = document.getElementById("wrongemail");

const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegEx = new RegExp(/^[0-9]+$/); //

const passwordRegEx = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
);

name.addEventListener("change", function () {
  if (name.value === "") {
    console.log(name);
    name.style.border = "solid red";
    wrongname.innerText = "Please Enter your name";
    wrongname.style.color = "red";
    password.disabled = true;
    email.disabled = true;
    phoneNumber.disabled = true;
  } else {
    name.style.border = "solid green";
    wrongname.innerHTML = "";
    password.disabled = false;
    email.disabled = false;
    phoneNumber.disabled = false;
  }
});

email.addEventListener("change", function () {
  if (email.value.match(mailRegEx)) {
    email.style.border = "solid green";
    wrongemail.innerHTML = "";
    password.disabled = false;
    phoneNumber.disabled = false;
    name.disabled = false;
  } else {
    console.log(email);
    email.style.border = "solid red";
    wrongemail.innerText = "Please Enter valid email";
    wrongemail.style.color = "red";
    password.disabled = true;
    phoneNumber.disabled = true;
    name.disabled = true;
  }
});

password.addEventListener("change", function (event) {
  if (password.value.match(passwordRegEx)) {
    password.style.border = "solid green";
    wrongpwd.innerHTML = "";
    phoneNumber.disabled = false;
    email.disabled = false;
    name.disabled = false;
  } else {
    console.log(password);
    password.style.border = "solid red";
    wrongpwd.innerHTML =
      "Email should contain: 6 caracters, A..Z caracters, 1..9 caracter , and a..z caracters";

    wrongpwd.style.color = "red";
    phoneNumber.disabled = true;
    email.disabled = true;
    name.disabled = true;
  }
});

phoneNumber.addEventListener("change", function () {
  if (phoneNumber.value.match(phoneRegEx)) {
    phoneNumber.style.border = "solid green";
    wrongphone.innerHTML = "";
    password.disabled = false;
    email.disabled = false;
    name.disabled = false;
  } else {
    phoneNumber.style.border = "solid red";
    wrongphone.innerHTML = "Email should contain only digits(numbers)";

    wrongphone.style.color = "red";
    password.disabled = true;
    email.disabled = true;
    name.disabled = true;
  }
});
btn.addEventListener("click", function () {
  if (phoneNumber.value.match(phoneRegEx)) {
    phoneNumber.style.border = "solid green";
    wrongphone.innerHTML = "";
    btn.disabled = false;
  } else {
    phoneNumber.style.border = "solid red";
    wrongphone.innerHTML = "Email should contain only digits(numbers)";

    wrongphone.style.color = "red";
    btn.disabled = true;
  }
  if (password.value.match(passwordRegEx)) {
    password.style.border = "solid green";
    wrongpwd.innerHTML = "";
    btn.disabled = false;
  } else {
    console.log(password);
    password.style.border = "solid red";
    wrongpwd.innerHTML =
      "Email should contain: 6 caracters, A..Z caracters, 1..9 caracter , and a..z caracters";

    wrongpwd.style.color = "red";
    btn.disabled = true;
  }
  if (email.value.match(mailRegEx)) {
    email.style.border = "solid green";
    wrongemail.innerHTML = "";
    btn.disabled = false;
  } else {
    console.log(email);
    email.style.border = "solid red";
    wrongemail.innerText = "Please Enter valid email";
    wrongemail.style.color = "red";
    btn.disabled = true;
  }
  if (name.value === "") {
    console.log(name);
    name.style.border = "solid red";
    wrongname.innerText = "Please Enter your name";
    wrongname.style.color = "red";
    btn.disabled = true;
  } else {
    name.style.border = "solid green";
    wrongname.innerHTML = "";
    btn.disabled = false;
  }
});

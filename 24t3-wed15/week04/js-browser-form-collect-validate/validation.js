const email = document.getElementById("email");
const firstName = document.getElementById("firstName");
const submit = document.getElementById("submit");

if (localStorage.getItem("name")) {
  firstName.value = localStorage.getItem("name");
}

const validateName = (firstName) => {
  return RegExp("^[a-zA-z]{2,20}$").test(firstName.value);
};

const validateEmail = (email) => {
  return RegExp(".+@.+..+").test(email.value);
};

const checkSubmit = () => {
  const email = document.getElementById("email");
  const firstName = document.getElementById("firstName");
  const submit = document.getElementById("submit");
  if (validateName(firstName) && validateEmail(email)) {
    submit.disabled = false;
  }
};

firstName.addEventListener("keyup", checkSubmit);
email.addEventListener("keyup", checkSubmit);

firstName.addEventListener("blur", () => {
  if (!validateName(firstName)) {
    firstName.style.background = "red";
  }

    localStorage.setItem("name", firstName.value);
});

firstName.addEventListener("focus", () => {
  firstName.style.background = "none";
});

email.addEventListener("blur", () => {
  if (!validateEmail(email)) {
    email.style.background = "red";
  }
});

email.addEventListener("focus", () => {
  email.style.background = "none";
});

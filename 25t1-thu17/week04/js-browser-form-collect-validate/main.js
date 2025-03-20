const validName = () => {
  const value = document.getElementById("firstName").value;
  console.log(RegExp("^[[A-Za-z]{2,20}$").test(value));
  return RegExp("^[A-Za-z]{2,20}$").test(value);
};

const validEmail = () => {
  const email = document.getElementById("email").value;
  console.log(RegExp(".+@.+..+").test(email));
  return RegExp(".+@.+..+").test(email);
};

const checkSubmit = () => {
  document.getElementById("submit").disabled = true;

  if (validEmail() && validName()) {
    document.getElementById("submit").disabled = false;
  }
};

document.getElementById("firstName").addEventListener("keyup", checkSubmit);
document.getElementById("firstName").addEventListener("blur", () => {
  if (!validName()) {
    document.getElementById("firstName").style.background = "red";
  }
});
document.getElementById("firstName").addEventListener("focus", () => {
  document.getElementById("firstName").style.background = "none";
});

document.getElementById("email").addEventListener("keyup", checkSubmit);
document.getElementById("email").addEventListener("blur", () => {
    if (!validEmail()) {
      document.getElementById("email").style.background = "red";
    }
  });
  document.getElementById("email").addEventListener("focus", () => {
    document.getElementById("email").style.background = "none";
  });

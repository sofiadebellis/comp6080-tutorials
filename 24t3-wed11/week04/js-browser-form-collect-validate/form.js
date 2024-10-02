const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

const validateEmail = (email) => {
    const e = email.value;
    return RegExp('.+\@.+\..+').test(e);
}

const validateName = (firstName) => {
    const name = firstName.value;
    return RegExp('^[a-zA-Z]{2,20}$').test(name);
}

const checkSubmit = (email, firstName, submit) => {
    if (validateEmail(email) && validateName(firstName)) {
        submit.disabled = false;
    }
}

firstName.addEventListener('keyup', checkSubmit(email, firstName, submit));
email.addEventListener('keyup', checkSubmit(email, firstName, submit));


firstName.addEventListener('blur', () => {
    if (!validateName(firstName)) {
        firstName.style.background = 'red';
    }
})

email.addEventListener('blur', () => {
    if (!validateEmail(email)) {
        email.style.background = 'red';
    }
})

firstName.addEventListener('focus', () => {
    firstName.style.background = 'none';
})

email.addEventListener('focus', () => {
    email.style.background = 'none';
})
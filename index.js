let emailField = document.getElementById("email-field");
let emailLabel = document.getElementById("email-label");
let emailError = document.getElementById("email-error");
let passwordLabel = document.getElementById("password-label");

function validationEmail () {
    emailLabel.style.bottom = "45px";

    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email tidak valid";
        emailField.style.borderBottomColor = "red";
        emailError.style.top = "70%";
        return false;
    }
    emailError.innerHTML = "";
    emailField.style.borderBottomColor = "green";
    emailError.style.top = "100%";
    return true;
}

function validationPassword () {
    passwordLabel.style.bottom = "45px";
}



function Validator(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

// Name validation
Validator.prototype.validateName = function () {
    return this.name.trim().length >= 3;
};

// Email validation
Validator.prototype.validateEmail = function () {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
};

// Password validation
Validator.prototype.validatePassword = function () {
    return this.password.length >= 6;
};

const form = document.getElementById("form");
const success = document.getElementById("success");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let validator = new Validator(name.value, email.value, password.value);

    let isValid = true;

    // Name
    if (!validator.validateName()) {
        showError(name, "Name must be at least 3 characters");
        isValid = false;
    } else {
        clearError(name);
    }

    // Email
    if (!validator.validateEmail()) {
        showError(email, "Invalid email");
        isValid = false;
    } else {
        clearError(email);
    }

    // Password
    if (!validator.validatePassword()) {
        showError(password, "Password must be 6+ chars");
        isValid = false;
    } else {
        clearError(password);
    }

    if (isValid) {
        success.innerText = "🎉 Registration Successful!";
        form.reset();
    }
});

function showError(input, message) {
    input.classList.add("error-border");
    input.nextElementSibling.innerText = message;
}

function clearError(input) {
    input.classList.remove("error-border");
    input.nextElementSibling.innerText = "";
}
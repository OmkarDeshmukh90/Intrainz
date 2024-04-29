function validateName() {
    let fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        document.getElementById('fullNameError').textContent = 'Name must be at least 5 characters';
    } else {
        document.getElementById('fullNameError').textContent = '';
    }
}

function validateEmail() {
    let email = document.getElementById('email').value;
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
    } else {
        document.getElementById('emailError').textContent = '';
    }
}

function validatePhone() {
    let phone = document.getElementById('phone').value;
    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number';
    } else {
        document.getElementById('phoneError').textContent = '';
    }
}

function validatePassword() {
    let fullName = document.getElementById('fullName').value;
    let password = document.getElementById('password').value;
    if (password.length < 8 || password === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters and cannot be "password" or your name';
    } else {
        document.getElementById('passwordError').textContent = '';
    }
}

function validateConfirmPassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }
}

function validateForm() {
    // Reset error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Call individual validation functions
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();

    // Check if any errors exist
    let isValid = true;
    document.querySelectorAll('.error').forEach(error => {
        if (error.textContent !== '') {
            isValid = false;
        }
    });

    return isValid;
}

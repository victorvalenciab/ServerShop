document.getElementById('myForm').addEventListener('submit', async function(event) {
    console.log("iniciando validaciones");
    event.preventDefault();

    clearErrors();

    let username = document.getElementById('username').value;
    let firstname = document.getElementById('firstname').value;
    let secondname = document.getElementById('secondname').value;
    let firstsurname = document.getElementById('firstsurname').value;
    let secondsurname = document.getElementById('secondsurname').value;
    let documentNumber = document.getElementById('documentNumber').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    if (!validateUsername(username)) {
        showError('usernameError', 'El nombre de usuario no debe contener caracteres especiales.');
        isValid = false;
    }

    if(!validateFirstname(firstname)) {
        showError('firstnameError', 'El nombre debe ser estrictamente texto')
        isValid = false;
    }

    if (!validateDocumentNumber(documentNumber)) {
        showError('documentNumberError', 'El número de documento debe ser estrictamente un número.');
        alert("El número de documento debe ser estrictamente un número");
        isValid = false;
    }

    if (!validatePassword(password)) {
        showError('passwordError', 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un carácter especial permitido.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Las contraseñas no coinciden.');
        isValid = false;
    }

    if (isValid) {
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "firstname": firstname,
                    "secondname": secondname,
                    "firstsurname": firstsurname,
                    "secondsurname": secondsurname,
                    "documentNumber": documentNumber,
                    "documentType": documentType,
                    "email": email,
                    "password": password
                })
            });

            if (response.ok) {
                alert('Registro completado.');
                document.getElementById('myForm').reset();
            } else {
                const result = await response.json();
                alert(result.error);
            }
        } catch (error) {
            console.log('Error:', error);
            alert('Ocurrió un error al registrar el usuario.');
        }
    }
});

document.getElementById('password').addEventListener('input', function() {
    let password = document.getElementById('password').value;
    let strengthBar = document.getElementById('passwordStrength');
    strengthBar.className = 'password-strength';

    if (password.length < 8) {
        strengthBar.classList.add('strength-weak');
        showError('passwordError', 'La contraseña debe tener al menos 8 caracteres.');
    } else if (password.length >= 8 && /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;])/.test(password)) {
        if (password.length >= 12) {
            strengthBar.classList.add('strength-strong');
            showError('passwordError', 'La contraseña es muy segura.');
        } else if (password.length >= 10) {
            strengthBar.classList.add('strength-good');
            showError('passwordError', 'La contraseña es segura.');
        } else {
            strengthBar.classList.add('strength-fair');
            showError('passwordError', 'La contraseña es debil.');
        }
    } else {
        strengthBar.classList.add('strength-weak');
        showError('passwordError', 'La contraseña es debil.');
    }
});

function validateUsername(username) {
    let usernameRegex = /^[a-zA-Z0-9_.-]+$/;
    return usernameRegex.test(username);
}

function validateFirstname(firstname) {
    let firstnameRegex = /^[a-zA-Z0-9_.-]+$/;
    return firstnameRegex.test(firstname);
}

function validateDocumentNumber(documentNumber) {
    let documentNumberRegex = /^[0-9]+$/;
    return documentNumberRegex.test(documentNumber);
}

function clearErrors() {
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(el) {
        el.innerText = '';
    });
}

function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function validatePassword(password) {
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
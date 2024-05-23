document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessageElement = document.getElementById('register-error-message');

    // Limpiar mensaje de error
    errorMessageElement.textContent = '';

    // Validaciones de la contraseña
    const passwordMinLength = 8;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (newPassword !== confirmPassword) {
        errorMessageElement.textContent = 'Las contraseñas no coinciden';
    } else if (newPassword.length < passwordMinLength) {
        errorMessageElement.textContent = `La contraseña debe tener al menos ${passwordMinLength} caracteres`;
    } else if (!passwordPattern.test(newPassword)) {
        errorMessageElement.textContent = 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial';
    } else {
        alert('Registro exitoso');
        window.location.href = '../login/index.html';
    }
});

function togglePasswordVisibility(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const toggleButton = passwordField.nextElementSibling;

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Ocultar';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Mostrar';
    }
}

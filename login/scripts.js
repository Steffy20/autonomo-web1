document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'usuario' && password === 'contraseña') {
        window.location.href = '../formularioProyectos/index.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});

document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = '../registro/index.html';
});

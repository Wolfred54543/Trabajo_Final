function authenticate(email, password) {
    const user = { email: 'francis123@hotmail.com', password: '123' }; 
    return email === user.email && password === user.password;
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (authenticate(email, password)) {
        Swal.fire({
            title: 'Éxito!',
            text: 'Usuario autenticado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            window.location.href = 'index.html'; 
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Correo electrónico o contraseña incorrectos.',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
        });
    }
});

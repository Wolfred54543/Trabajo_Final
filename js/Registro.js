        document.getElementById('register-form').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const dob = document.getElementById('dob').value;
            const password = document.getElementById('password').value;

            // Validaciones simples
            if (name === "" || email === "" || phone === "" || dob === "" || password === "") {
                Swal.fire({
                    title: 'Error!',
                    text: 'Por favor, completa todos los campos.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
                return;
            }

            Swal.fire({
                title: 'Éxito!',
                text: 'Registro completado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'index.html'; 
            });
        });
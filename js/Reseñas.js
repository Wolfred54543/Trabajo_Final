const reseñas = [];
let calificacion = 0;

document.querySelectorAll('.estrella').forEach(star => {
    star.addEventListener('click', () => {
        calificacion = star.getAttribute('data-value');
        actualizarEstrellas(calificacion);
    });
});

function actualizarEstrellas(calificacionSeleccionada) {
    document.querySelectorAll('.estrella').forEach(star => {
        star.classList.remove('selected');
        if (star.getAttribute('data-value') <= calificacionSeleccionada) {
            star.classList.add('selected');
        }
    });
}

function agregarReseña() {
    const reseñaInput = document.getElementById("reseña");
    const reseña = reseñaInput.value.trim();
    if (reseña && calificacion > 0) {
        reseñas.push({ reseña, calificacion });
        mostrarReseñas();
        reseñaInput.value = ''; 
        calificacion = 0; 
        actualizarEstrellas(0); 
    }
}

function mostrarReseñas() {
    const lista = document.getElementById("listaReseñas");
    lista.innerHTML = ''; 
    reseñas.forEach(item => {
        const div = document.createElement("div");
        div.className = "reseña";
        div.innerHTML = `
            <strong>Calificación: ${item.calificacion} estrellas</strong><br>
            ${item.reseña}
        `;
        lista.appendChild(div);
    });
}
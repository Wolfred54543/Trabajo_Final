function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const section = document.getElementById(sectionId);

    sections.forEach(sec => {
        if (sec !== section) {
            sec.classList.remove('active');
            sec.style.display = 'none'; 
        }
    });

    if (section.classList.contains('active')) {
        section.classList.remove('active'); 
        setTimeout(() => {
            section.style.display = 'none'; 
        }, 500); 
    } else {
        section.style.display = 'block'; 
        setTimeout(() => {
            section.classList.add('active'); 
        }, 10); 
    }
}

// Asignar eventos a los botones
document.getElementById('toggleSection1').addEventListener('click', () => toggleSection('section1'));
document.getElementById('toggleSection2').addEventListener('click', () => toggleSection('section2'));
document.getElementById('toggleSection3').addEventListener('click', () => toggleSection('section3'));
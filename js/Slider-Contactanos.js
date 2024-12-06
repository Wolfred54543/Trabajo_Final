const slides = document.querySelector('.slides');
const btnSlide = document.querySelectorAll('.btnP');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = btnSlide.length;
    currentIndex = (index + totalSlides) % totalSlides; 
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    sliderBTN();
}

function sliderBTN() {
    btnSlide.forEach(btnP => btnP.classList.remove('active'));
    btnSlide[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

let slideInterval = setInterval(nextSlide, 3000);

btnSlide.forEach(dot => {
    dot.addEventListener('click', (event) => {
        clearInterval(slideInterval); 
        const index = parseInt(event.target.dataset.index);
        showSlide(index);
        slideInterval = setInterval(nextSlide, 3000); 
    });
});

showSlide(currentIndex);
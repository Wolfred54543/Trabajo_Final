const toggleContainer = document.getElementById('themeToggle');

toggleContainer.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
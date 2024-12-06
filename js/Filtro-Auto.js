document.addEventListener('DOMContentLoaded', function() {
    const brandSelect = document.getElementById('brand');
    const carList = document.getElementById('carList');

    brandSelect.addEventListener('change', function() {
        const selectedBrand = this.value;
        const cars = carList.getElementsByClassName('car');

      
        for (let i = 0; i < cars.length; i++) {
            const car = cars[i];
            if (selectedBrand === 'all' || car.getAttribute('data-brand') === selectedBrand) {
                car.style.display = 'block'; 
            } else {
                car.style.display = 'none'; 
            }
        }
    });
});
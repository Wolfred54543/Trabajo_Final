
    function animateCounter(targetNumber, duration) {
        const counterElement = document.getElementById('Counter1');
        const counterElement2 = document.getElementById('Counter2');
        let startNumber = 0;
        const increment = targetNumber / (duration / 100); 

        const interval = setInterval(() => {
            startNumber += increment;
            if (startNumber >= targetNumber) {
                startNumber = targetNumber;
                clearInterval(interval); 
            }
            counterElement.textContent = Math.round(startNumber); 
            counterElement2.textContent = Math.round(startNumber);
        }, 100); 
    }
    function animateCounter2(targetNumber, duration){
        const counterElement3 = document.getElementById('Counter3');
        const counterElement4 = document.getElementById('Counter4');
        let startNumber = 0;
        const increment = targetNumber / (duration / 100); 

        const interval = setInterval(() => {
            startNumber += increment;
            if (startNumber >= targetNumber) {
                startNumber = targetNumber;
                clearInterval(interval); 
            }
            counterElement3.textContent = Math.round(startNumber);
            counterElement4.textContent = Math.round(startNumber); 
        }, 100); 
    }

    
    document.addEventListener('DOMContentLoaded', () => {
        animateCounter(500, 3000); 
    });
    document.addEventListener('DOMContentLoaded', () => {
        animateCounter2(10, 3000); 
    });

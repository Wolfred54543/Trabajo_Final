function updateClock() {
    const now = new Date(); 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); 

    const currentTime = `Hora Actual: ${hours}:${minutes}:${seconds}`; 
    document.getElementById('reloj').textContent = currentTime; 
}

setInterval(updateClock, 1000); 
updateClock(); 
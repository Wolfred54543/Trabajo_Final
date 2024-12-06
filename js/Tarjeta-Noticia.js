  // Obtener elementos
  const newsCard = document.getElementById('newsCard');
  const newsModal = document.getElementById('newsModal');
  const closeModal = document.getElementById('closeModal');


  newsCard.onclick = function() {
      newsModal.style.display = 'flex'; 
  }


  closeModal.onclick = function() {
      newsModal.style.display = 'none'; 
  }

  window.onclick = function(event) {
      if (event.target === newsModal) {
          newsModal.style.display = 'none';
      }
  }
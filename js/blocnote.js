document.addEventListener('DOMContentLoaded', () => {
  const noteBtn = document.getElementById('noteBtn');
  const notePopup = document.getElementById('notePopup');
  const noteArea = document.getElementById('noteArea');

  if (!noteBtn || !notePopup || !noteArea) {
    console.warn('Bloc-note : éléments manquants');
    return;
  }

  // Charger la note sauvegardée
  noteArea.value = localStorage.getItem('blocNote') || "";

  // Sauvegarde en temps réel
  noteArea.addEventListener('input', () => {
    localStorage.setItem('blocNote', noteArea.value);
  });

  // Ouverture
  noteBtn.addEventListener('click', () => {
    notePopup.style.display = 'flex';
    document.body.classList.add('modal-open');
  });

  // Fermeture en cliquant à l'extérieur
  notePopup.addEventListener('click', (e) => {
    if (e.target === notePopup) {
      notePopup.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
});

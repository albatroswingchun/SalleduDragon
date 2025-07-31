document.addEventListener("DOMContentLoaded", function () {
  const note = document.getElementById("bloc-note");

  if (!note) return;

  // Charger la note enregistrée depuis le localStorage
  const savedNote = localStorage.getItem("note_partagee");
  if (savedNote) {
    note.value = savedNote;
  }

  // Mettre à jour le localStorage à chaque modification du bloc-note
  note.addEventListener("input", function () {
    localStorage.setItem("note_partagee", note.value);
  });
});

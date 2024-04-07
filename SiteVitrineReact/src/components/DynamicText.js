import React, { useEffect } from "react";

// Composant de texte dynamique
const DynamicText = () => {
  // Effet useEffect pour la gestion du texte dynamique
  useEffect(() => {
    // Cible l'élément HTML où le texte dynamique sera affiché
    const target = document.getElementById("text-target");
    // Tableau des mots à afficher
    let array = ["simple", "claire", "intelligent", "fort"];
    // Index du mot en cours
    let wordIndex = 0;
    // Index de la lettre en cours
    let letterIndex = 0;

    // Fonction pour créer une lettre
    const createLetter = () => {
      // Crée un élément span pour chaque lettre
      const letter = document.createElement("span");
      // Ajoute la lettre à l'élément cible
      target.appendChild(letter);

      // Ajoute la classe "letter" pour le style
      letter.classList.add("letter");
      // Initialise l'opacité de la lettre à 0 pour l'animation d'apparition
      letter.style.opacity = "0";
      // Applique l'animation d'apparition avec une durée de 5 secondes
      letter.style.animation = "anim 5s ease forwards";
      // Définit le contenu de la lettre
      letter.textContent = array[wordIndex][letterIndex];

      // Supprime la lettre après 2 secondes
      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    // Fonction pour boucler à travers les mots et les lettres
    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          // Réinitialise les indices si tous les mots ont été affichés
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          // Crée une lettre si toutes les lettres du mot actuel n'ont pas été affichées
          createLetter();
          letterIndex++;
          loop();
        } else {
          // Passe au mot suivant après un délai de 2 secondes
          letterIndex = 0;
          wordIndex++;
          setTimeout(loop, 2000);
        }
      }, 80); // Délai entre l'affichage de chaque lettre
    };
    loop(); // Démarre la boucle initiale
  }, []); // Le tableau vide en second argument garantit que useEffect s'exécute uniquement après le premier rendu

  // Rendu du texte dynamique
  return (
    <span className="dynamic-text">
      <span>simplement</span> {/* Texte fixe initial */}
      <span id="text-target"></span> {/* Cible pour le texte dynamique */}
    </span>
  );
};

export default DynamicText; // Exporte le composant DynamicText

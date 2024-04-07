import React, { useEffect } from "react";

// Composant pour le suivi du curseur de la souris
const Mouse = () => {
  // Effet useEffect pour la gestion du curseur de la souris
  useEffect(() => {
    // Sélectionne l'élément du curseur
    const cursor = document.querySelector(".cursor");

    // Écoute l'événement de déplacement de la souris
    window.addEventListener("mousemove", (e) => {
      // Met à jour la position du curseur en fonction de la position de la souris
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
    });

    // Ajoute des écouteurs d'événements à tous les éléments avec la classe "hover"
    document.querySelectorAll(".hover").forEach((link) => {
      // Lorsque la souris survole l'élément
      link.addEventListener("mouseover", () => {
        // Ajoute la classe "hovered" pour styliser le curseur
        cursor.classList.add("hovered");
      });

      // Lorsque la souris quitte l'élément
      link.addEventListener("mouseleave", () => {
        // Applique une transition de 0.3 seconde pour la sortie en douceur du curseur
        cursor.style.transition = ".3s ease-out";
        // Supprime la classe "hovered" pour réinitialiser le style du curseur
        cursor.classList.remove("hovered");
      });
    });
  }, []); // Le tableau vide en second argument garantit que useEffect s'exécute uniquement après le premier rendu

  // Rendu du curseur de la souris
  return <span className="cursor"></span>;
};

export default Mouse; // Exporte le composant Mouse

import React from "react";

// Composant pour afficher les icônes des réseaux sociaux avec animation
const SocialNetwork = () => {
  // Fonction pour l'animation des icônes
  const anim = () => {
    // Sélectionne tous les liens des réseaux sociaux
    const icons = document.querySelectorAll(".social-network a");

    // Ajoute des écouteurs d'événements à chaque lien
    icons.forEach((link) => {
      // Lorsque la souris survole l'icône
      link.addEventListener("mouseover", (e) => {
        // Déplace l'icône en fonction de la position de la souris
        link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`;
      });

      // Lorsque la souris quitte l'icône
      link.addEventListener("mouseleave", () => {
        // Réinitialise la transformation
        link.style.transform = "";
      });
    });
  };

  // Rendu des icônes des réseaux sociaux
  return (
    <div className="social-network">
      <ul className="content">
        {/* Icône Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim} // Applique l'animation au survol
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>
        {/* Icône Twitter */}
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim} // Applique l'animation au survol
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        {/* Icône Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim} // Applique l'animation au survol
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork; // Exporte le composant SocialNetwork

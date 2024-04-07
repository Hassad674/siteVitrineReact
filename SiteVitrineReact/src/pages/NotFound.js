import React from "react";
import { NavLink } from "react-router-dom";

// Page NotFound pour gérer les erreurs 404
const NotFound = () => {
  // Rendu de la page NotFound
  return (
    <div className="notFound">
      <div className="notFound-content">
        <h2>Erreur 404</h2>
        {/* Lien de retour à l'accueil */}
        <NavLink to="/">
          <h3>
            Retour à l'accueil <i className="fas fa-home"></i>
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound; // Exporte la page NotFound

import React from "react";
import { NavLink } from "react-router-dom";

// Composant fonctionnel Buttons
// Prend les propriétés left et right et renvoie des boutons de navigation React Router
const Buttons = (props) => {
  return (
    // Conteneur pour les boutons de navigation
    <div className="scroll-bottom">
      {/* Si la propriété left est définie, affiche un bouton de navigation vers la gauche */}
      {props.left && (
        <NavLink to={props.left} className="left hover">
          {/* Flèche vers la gauche */}
          <span>&#10092;</span>
        </NavLink>
      )}
      {/* Si la propriété right est définie, affiche un bouton de navigation vers la droite */}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          {/* Flèche vers la droite */}
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;

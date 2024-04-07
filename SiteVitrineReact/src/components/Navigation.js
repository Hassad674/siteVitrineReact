import React from "react";
import { NavLink } from "react-router-dom";

// Composant de navigation
const Navigation = () => {
  // Rendu de la navigation
  return (
    <div className="navigation">
      <ul>
        {/* Lien vers la page d'accueil */}
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>accueil</li>
        </NavLink>

        {/* Lien vers la page de portfolio */}
        <li className="nav-portfolio">
          portfolio
          {/* Sous-menu des projets */}
          <ul className="nav-projects">
            {/* Liens vers chaque projet */}
            <NavLink
              to="/projet-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 1</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 2</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 3</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>projet 4</li>
            </NavLink>
          </ul>
        </li>

        {/* Lien vers la page de contact */}
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation; // Exporte le composant Navigation

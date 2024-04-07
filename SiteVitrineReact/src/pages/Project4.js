import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

// Page du quatrième projet
const Project4 = () => {
  // Rendu de la page du quatrième projet
  return (
    <main>
      {/* Affichage du curseur de la souris */}
      <Mouse />
      <div className="project">
        {/* Barre de navigation */}
        <Navigation />
        {/* Logo */}
        <Logo />
        {/* Affichage des détails du quatrième projet */}
        <Project projectNumber={3} />
        {/* Boutons de navigation vers le troisième projet et la page de contact */}
        <Buttons left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4; // Exporte la page du quatrième projet

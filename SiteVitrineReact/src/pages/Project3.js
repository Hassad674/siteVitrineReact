import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

// Page du troisième projet
const Project3 = () => {
  // Rendu de la page du troisième projet
  return (
    <main>
      {/* Affichage du curseur de la souris */}
      <Mouse />
      <div className="project">
        {/* Barre de navigation */}
        <Navigation />
        {/* Logo */}
        <Logo />
        {/* Affichage des détails du troisième projet */}
        <Project projectNumber={2} />
        {/* Boutons de navigation vers le deuxième et le quatrième projet */}
        <Buttons left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};

export default Project3; // Exporte la page du troisième projet

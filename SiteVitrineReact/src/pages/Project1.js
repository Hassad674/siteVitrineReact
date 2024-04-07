import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

// Page du premier projet
const Project1 = () => {
  // Rendu de la page du premier projet
  return (
    <main>
      {/* Affichage du curseur de la souris */}
      <Mouse />
      <div className="project">
        {/* Barre de navigation */}
        <Navigation />
        {/* Logo */}
        <Logo />
        {/* Affichage des détails du premier projet */}
        <Project projectNumber={0} />
        {/* Boutons de navigation vers l'accueil et le deuxième projet */}
        <Buttons left={"/"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project1; // Exporte la page du premier projet

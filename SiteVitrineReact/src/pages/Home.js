import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

// Page d'accueil
const Home = () => {
  // Variants pour les animations
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  // Rendu de la page d'accueil
  return (
    <div>
      {/* Affichage du curseur de la souris */}
      <Mouse />
      {/* Conteneur principal avec animation */}
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        {/* Barre de navigation */}
        <Navigation />
        {/* Réseaux sociaux */}
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            {/* Titre principal avec animation de glissement */}
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              FS AGENCY
            </motion.h1>
            {/* Sous-titre dynamique avec animation de glissement */}
            <motion.h2
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        {/* Boutons de navigation */}
        <Buttons right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default Home; // Exporte la page d'accueil

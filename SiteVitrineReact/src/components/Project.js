import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

// Composant pour afficher les détails d'un projet
const Project = ({ projectNumber }) => {
  // Utilisation de l'état local pour stocker les données du projet actuel
  const [currentProject] = useState(projectsData[projectNumber]);
  // États locaux pour la position et la taille des éléments
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  // Effet useEffect pour initialiser la position et la taille des éléments
  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px"); // Position horizontale aléatoire
    setTop(Math.floor(Math.random() * 200 + 150) + "px"); // Position verticale aléatoire
    setSize("scale(" + (Math.random() + 0.7) + ")"); // Taille aléatoire
  }, []);

  // Variants pour les animations
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  // Transition pour les animations
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  // Variants pour l'animation de l'image
  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)), // Décalage horizontal aléatoire
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)), // Décalage vertical aléatoire
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  // Rendu du composant de projet
  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {/* Liste des langages utilisés */}
          {currentProject.languages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Contenu de l'image avec animation */}
      <motion.div
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
        className="img-content"
      >
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          />
        </div>
        {/* Bouton pour voir le site du projet */}
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <span className="button">voir le site</span>
          </a>
        </div>
      </motion.div>
      {/* Cercle aléatoire pour l'effet visuel */}
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Project; // Exporte le composant Project

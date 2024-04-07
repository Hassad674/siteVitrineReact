import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

// Page de contact
const Contact = () => {
  // Transition de la page
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  // Rendu de la page de contact
  return (
    <main>
      {/* Affichage du curseur de la souris */}
      <Mouse />
      {/* Conteneur principal avec animation */}
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        {/* Barre de navigation */}
        <Navigation />
        {/* Logo */}
        <Logo />
        {/* Formulaire de contact */}
        <ContactForm />
        {/* Informations de contact */}
        <div className="contact-infos">
          {/* Adresse */}
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          {/* Téléphone */}
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              {/* Copie du numéro de téléphone au clic */}
              <CopyToClipboard text="0642844284" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  06 42 84 42 84
                </p>
              </CopyToClipboard>
            </div>
          </div>
          {/* Email */}
          <div className="email">
            <div className="content">
              <h4>email</h4>
              {/* Copie de l'adresse email au clic */}
              <CopyToClipboard text="fsagency@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  fsagency@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          {/* Réseaux sociaux */}
          <SocialNetwork />
          {/* Crédits */}
          <div className="credits">
            <p>From Scratch - 2022</p>
          </div>
        </div>
        {/* Boutons de navigation */}
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact; // Exporte la page de contact

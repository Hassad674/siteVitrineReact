import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

// Initialisation de l'identifiant de service
init(process.env.ID);

// Composant de formulaire de contact
const ContactForm = () => {
  // Référence au formulaire
  const form = useRef();

  // Fonction pour envoyer l'email
  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Sélectionne le message de formulaire
    const formMess = document.querySelector(".formMessage");

    // Envoie du formulaire via EmailJS
    emailjs
      .sendForm(
        "service_y4q20km", // ID du service EmailJS
        "template_5ni7fmu", // ID du modèle de courrier
        form.current, // Référence au formulaire actuel
        process.env.REACT_APP_ID // ID de l'utilisateur EmailJS
      )
      .then(
        // En cas de succès
        (res) => {
          console.log(res.text); // Affiche la réponse de réussite dans la console
          form.current.reset(); // Réinitialise le formulaire après l'envoi
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>"; // Affiche un message de succès

          // Efface le message de succès après 2 secondes
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        },
        // En cas d'erreur
        (err) => {
          console.log(err.text); // Affiche le message d'erreur dans la console
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>"; // Affiche un message d'erreur

          // Efface le message d'erreur après 2 secondes
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        }
      );
  };

  // Rendu du formulaire de contact
  return (
    <div className="form-container">
      <h2>contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm; // Exporte le composant ContactForm

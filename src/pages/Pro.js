import React, { useEffect, useRef } from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Card from "../components/Card";

const Pro = ({ theme, handleTheme }) => {
  const ref = useRef(null);
  useEffect(() => {
    // Fonction pour détecter l'événement de défilement de la souris
    function handleMouseWheel(event) {
      // Empêcher le défilement vertical par défaut
      event.preventDefault();

      // Ajuster la position de défilement horizontal en fonction de la valeur de défilement de la souris
      const delta = event.deltaY;
      if (delta > 0) {
        // Si la direction est positive (vers la droite), faire défiler la page vers la droite
        ref.current.scrollLeft += 80;
      } else if (delta < 0) {
        // Si la direction est négative (vers la gauche), faire défiler la page vers la gauche
        ref.current.scrollLeft -= 80;
      }
    }

    // Ajouter l'écouteur d'événement pour le défilement de la souris
    if (window.addEventListener)
      // Pour les navigateurs modernes
      window.addEventListener("wheel", handleMouseWheel, { passive: false });
  });

  return (
    <div
      className={theme ? "light-theme pro-page" : "dark-theme pro-page"}
      ref={ref}
    >
      <SwitchTheme handleTheme={handleTheme} />
      <Logo />
      <Socials />
      <NavLink className="back" to="/">
        <FaArrowCircleLeft />
      </NavLink>
      <div className="pro-container pro-container-wrapper">
        <div className="card">
          <div className="front">
            <h1>Expérience pro</h1>
            <h3>2018-2020</h3>
          </div>
          <div className="backcard">
            <div className="back-content">
              <h1>Chrono-Caisse</h1>
              <h3>Développeur web en CDI</h3>
              <hr />
              <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page,
              </p>
              <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page,
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="card">
          <div className="front">
            <h1>Diplôme</h1>
            <h3>2018</h3>
          </div>
          <div className="backcard">
            <h1>Coucou</h1>
          </div>
        </div>{" "}
        <div className="card">
          <div className="front">
            <h1>Expérience pro</h1>
            <h3>2018-2020</h3>
          </div>
          <div className="backcard">
            <p>Coucou</p>
          </div>
        </div>{" "}
        <div className="card">
          <div className="front">
            <h1>Diplôme</h1>
            <h3>2018</h3>
          </div>
          <div className="backcard">
            <p>Coucou</p>
          </div>
        </div>{" "}
        <div className="card">
          <div className="front">
            <h1>Expérience pro</h1>
            <h3>2018-2020</h3>
          </div>
          <div className="back">
            <p>Coucou</p>
          </div>
        </div>{" "}
        <div className="card">
          <div className="front">
            <h1>Diplôme</h1>
            <h3>2018</h3>
          </div>
          <div className="back">
            <p>Coucou</p>
          </div>
        </div>{" "}
        <div className="card">
          <div className="front">
            <h1>Expérience pro</h1>
            <h3>2018-2020</h3>
          </div>
          <div className="back">
            <h2></h2>
            <h4></h4>
            <p>Coucou</p>
          </div>
        </div>{" "}
        <div className="card">
          <div className="front">
            <h1>Diplôme</h1>
            <h3>2018</h3>
          </div>
          <div className="back">
            <p>Coucou</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Pro;

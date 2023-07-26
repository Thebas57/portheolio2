import React, { useEffect, useRef } from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import BigTitle from "../components/BigTitle";
import { motion } from "framer-motion";

const Pro = ({ theme, handleTheme }) => {
  //Pour framer motion
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };
  const Item = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };
  const ref = useRef(null);
  const refYy = useRef(null);
  useEffect(() => {
    // Fonction pour détecter l'événement de défilement de la souris
    function handleMouseWheel(event) {
      // Empêcher le défilement vertical par défaut
      //event.preventDefault();

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

    //fonction rotate yinyang
    const rotate = () => {
      let rot = ref.current.scrollLeft;
      refYy.current.style.transform = `rotate(` + -rot + `deg)`;
    };

    // Ajouter l'écouteur d'événement pour le défilement de la souris
    if (window.addEventListener) {
      // Pour les navigateurs modernes
      window.addEventListener("wheel", handleMouseWheel);
      window.addEventListener("wheel", rotate);
    }

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
      window.removeEventListener("wheel", rotate);
    };
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
      <BigTitle title="PRO" />
      <div className="yinyang-container">
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="yin-yang"
          className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16 yinyang"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          ref={refYy}
        >
          <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z" />
        </svg>
      </div>
      <motion.div
        className="pro-container pro-container-wrapper"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="card" variants={Item}>
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
        </motion.div>{" "}
        <motion.div className="card" variants={Item}>
          <div className="front">
            <h1>Diplôme</h1>
            <h3>2018</h3>
          </div>
          <div className="backcard">
            <h1>Coucou</h1>
          </div>
        </motion.div>{" "}
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
      </motion.div>
    </div>
  );
};

export default Pro;

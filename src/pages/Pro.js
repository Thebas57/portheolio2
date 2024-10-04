import React, { useEffect, useRef } from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import BigTitle from "../components/BigTitle";
import { motion } from "framer-motion";
import pro from "../json/pro.json";

const Pro = ({ theme, handleTheme }) => {
  //Pour les expériences pro / libelle
  function createArrayWithBrLines(inputString) {
    const linesArray = inputString.split("<br/>");
    return linesArray.map((line, index) => {
      return <p key={index}>{line}</p>;
    });
  }
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
        duration: 3,
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

    // Vérifier si le périphérique est un appareil mobile
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Ajouter l'écouteur d'événement pour le défilement de la souris
    if (window.addEventListener) {
      // Pour les navigateurs modernes
      if (isMobile) window.addEventListener("touchmove", rotate);
      else window.addEventListener("wheel", rotate);

      window.addEventListener("wheel", handleMouseWheel);
    }

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
      if (isMobile) window.removeEventListener("touchmove", rotate);
      else window.removeEventListener("wheel", rotate);
    };
  });

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6 }}
    >
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
          {pro.pro.map((exp) => {
            return (
              <motion.div variants={Item} key={exp.id}>
                <div className="card">
                  <div className="front">
                    <h1>
                      {exp.type === "experience" ? "Expérience pro" : "Diplôme"}
                    </h1>
                    <h3>{exp.date}</h3>
                  </div>
                  <div className="backcard">
                    <div className="back-content">
                      <h1>{exp.lieu}</h1>
                      <h3>{exp.libelle}</h3>
                      <hr />
                      <div className="description">
                        {createArrayWithBrLines(exp.description)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512.001 512.001"
            className="scrollsvg"
            onClick={(e) => alert("Fais glisser les cartes vers la droite.\nTu peux aussi cliquer sur les cartes pour y voir plus d'informations !")}
          >
            <g transform="translate(0 -1)">
              <g>
                <g>
                  <path
                    d="M507.08,31.876c-0.435-1.041-1.058-1.988-1.843-2.773l-25.6-25.6c-3.328-3.337-8.73-3.337-12.066,0
				c-3.328,3.337-3.328,8.73,0,12.066l11.034,11.034h-98.867c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h98.867
				l-11.034,11.034c-3.328,3.337-3.328,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5l25.6-25.6
				c0.785-0.785,1.408-1.724,1.843-2.773C507.942,36.313,507.942,33.958,507.08,31.876z"
                  />
                  <path
                    d="M371.292,180.201c-9.6,0-18.466,3.191-25.6,8.55v-8.55c0-23.526-19.14-42.667-42.667-42.667
				c-9.6,0-18.466,3.191-25.6,8.55v-0.017c0-23.526-19.14-42.667-42.667-42.667c-9.6,0-18.466,3.191-25.6,8.55V43.668
				c0-23.526-19.14-42.667-42.667-42.667c-23.526,0-42.667,19.14-42.667,42.667v194.347c-19.029-32.41-62.66-49.323-95.514-36.949
				c-4.796,1.809-8.917,4.378-11.597,6.161c-12.8,8.474-12.45,18.901-12.22,22.69c-0.819,4.634,0.137,5.734,11.802,19.217
				c15.044,17.391,46.362,53.564,66.133,89.139c0.751,1.212,13.747,22.229,30.857,44.356c6.289,3.482,12.749,7.014,18.799,10.325
				c26.274,14.362,42.641,23.415,48.358,28.126c3.644,2.995,4.164,8.371,1.169,12.006c-1.69,2.048-4.13,3.115-6.588,3.115
				c-1.911,0-3.831-0.64-5.419-1.946c-4.181-3.439-20.617-12.587-37.248-21.7v15.198c0,47.01,38.238,85.248,85.248,85.248h85.419
				c36.983,0,75.119-30.686,83.277-67.021c2.236-9.958,5.257-17.51,8.508-21.257c0.452-0.529,0.922-1.229,1.382-1.826
				c-21.606,7.774-39.39,12.919-39.825,13.03c-0.717,0.188-1.434,0.273-2.142,0.273c-3.797,0-7.262-2.543-8.26-6.391
				c-1.186-4.557,1.553-9.216,6.118-10.402c13.781-3.576,35.447-11,55.569-19.081c3.703-11.093,6.306-24.909,6.306-40.926V222.868
				C413.959,199.342,394.818,180.201,371.292,180.201z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pro;

import React from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import Particle from "../components/Particle";
import BigTitle from "../components/BigTitle";
import { motion } from "framer-motion";

const Skills = ({ theme, handleTheme }) => {
  const rightVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const leftVariants = {
    hidden: { x: 1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  return (
    <motion.div
      className={theme ? "light-theme skills-page" : "dark-theme skills-page"}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <div className="skills-fix">
        <SwitchTheme handleTheme={handleTheme} />
        <Particle handleTheme={handleTheme} theme={theme} />
        <Logo />
        <Socials />
        <NavLink className="back" to="/">
          <FaArrowCircleLeft />
        </NavLink>
        <BigTitle title="SKILLS" />
        <div className="skills-container">
          <motion.div
            className="skill"
            initial="hidden"
            animate="visible"
            variants={rightVariants}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="titre">
              <div>
                <GiSkills />
                <h1>Backend</h1>
              </div>
            </div>
            <div className="description">
              J'adore le backend car il permet aux applications de fonctionner
              de manière fluide et efficace. Cela comprend la conception et la
              gestion de bases de données ainsi que la création d'APIs.
            </div>
            <div className="comp">
              <h2>LANGAGES :</h2>
              <ul>
                <li>PHP</li>
                <li>JS (NodeJs)</li>
              </ul>
            </div>
            <div className="comp">
              <h2>FRAMEWORKS :</h2>
              <ul>
                <li>Laravel, Slim, Twig</li>
                <li>ExpressJS, Axios, Redux</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="skill"
            initial="hidden"
            animate="visible"
            variants={leftVariants}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="titre">
              <div>
                <MdDeveloperMode />

                <h1>Frontend</h1>
              </div>
            </div>
            <div className="description">
              J'adore le frontend car les résultats sont immédiatement visibles.
              J'adore donner vie aux idées et créer des interfaces élégantes et
              interactives.
            </div>
            <div className="comp">
              <h2>SKILLS :</h2>
              <ul>
                <li>HTML, CSS</li>
                <li>JS</li>
              </ul>
            </div>
            <div className="comp">
              <h2>FRAMEWORKS :</h2>
              <ul>
                <li>Scss</li>
                <li>ReactJS</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

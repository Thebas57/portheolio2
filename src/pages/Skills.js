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
  return (
    <motion.div
      className={theme ? "light-theme skills-page" : "dark-theme skills-page"}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <SwitchTheme handleTheme={handleTheme} />
      <Particle handleTheme={handleTheme} theme={theme} />
      <Logo />
      <Socials />
      <NavLink className="back" to="/">
        <FaArrowCircleLeft />
      </NavLink>
      <BigTitle title="SKILLS" />
      <div className="skills-container">
        <div className="skill">
          <div className="titre">
            <div>
              <GiSkills />
              <h1>Backend</h1>
            </div>
          </div>
          <div className="description">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée.
          </div>
          <div className="comp">
            <h2>SKILLS :</h2>
            <ul>
              <li>PHP</li>
              <li>JS</li>
            </ul>
          </div>
          <div className="comp">
            <h2>TOOLS :</h2>
            <ul>
              <li>PHP</li>
              <li>JS</li>
            </ul>
          </div>
        </div>
        <div className="skill">
          <div className="titre">
            <div>
              <MdDeveloperMode />

              <h1>Frontend</h1>
            </div>
          </div>
          <div className="description">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée.
          </div>
          <div className="comp">
            <h2>SKILLS :</h2>
            <ul>
              <li>PHP</li>
              <li>JS</li>
            </ul>
          </div>
          <div className="comp">
            <h2>TOOLS :</h2>
            <ul>
              <li>PHP</li>
              <li>JS</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

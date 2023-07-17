import React from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const Skills = ({ theme, handleTheme }) => {
  return (
    <div className={theme ? "light-theme skills-page" : "dark-theme skills-page"}>
      <SwitchTheme handleTheme={handleTheme} />
      <Logo />
      <Socials />
      <NavLink className="back" to="/">
        <FaArrowCircleLeft />
      </NavLink>
      <div className="skills-container">
        <div className="skill">
          <div className="titre">
            <h1>Titre</h1>
          </div>
          <div className="description">Description</div>
          <div className="comp">
            <h2>Skills :</h2>
            <ul>
              <li>PHP</li>
              <li>JS</li>
            </ul>
          </div>
          <div className="comp">
            <h2>Tools :</h2>
            <ul>
              <li>PHP</li>
              <li>JS</li>
            </ul>
          </div>
        </div>
        <div className="skill">
          <div className="titre">
            <h1>Titre</h1>
          </div>
          <div className="description">Description</div>
          <div className="comp">
            <h2>Skills :</h2>
            <ul>
              <li>PHP</li>
              <li>JS</li>
            </ul>
          </div>
          <div className="comp">
            <h2>Tools :</h2>
            <ul>
              <li>PHP</li>
              <li>JS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

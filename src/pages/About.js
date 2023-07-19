import React from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { GiGrandPiano } from "react-icons/gi";
import PianoParticle from "../components/PianoParticle";

const About = ({ theme, handleTheme }) => {
  return (
    <div className={theme ? "light-theme about-page" : "dark-theme about-page"}>
      <SwitchTheme handleTheme={handleTheme} />
      <PianoParticle handleTheme={handleTheme} theme={theme} />
      <Logo />
      <Socials />
      <NavLink className="back" to="/">
        <FaArrowCircleLeft />
      </NavLink>
      <GiGrandPiano className="piano" />
      <div className="about-container">
        <div className="about-theo">
          <div>
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée
          </div>
          <div>
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée
          </div>
          <div>
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import {
  FaChessBoard,
  FaChessKing,
  FaChessQueen,
  FaChessRook,
} from "react-icons/fa";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import Me from "../components/Me";
import { NavLink } from "react-router-dom";
import SwitchTheme from "../components/SwitchTheme";
import BigTitle from "../components/BigTitle";

const Home = ({ theme, handleTheme }) => {
  //Fonction pour envoyer un mail
  const handleMailClick = () => {
    const emailAddress = "theohelf@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const [click, setClick] = useState(false);

  return (
    <div className={theme ? "light-theme home" : "dark-theme home"}>
      <SwitchTheme handleTheme={handleTheme} />
      <Logo />
      <Socials />
      <BigTitle title="HOME" />
      <div className="contact">
        <h4 onClick={handleMailClick}>Contacte moi</h4>
      </div>
      <NavLink to="/skills">
        <div className="skills">
          <h4>Skills</h4>
          <FaChessRook />
        </div>
      </NavLink>
      <NavLink to="/works">
        <div className="projets">
          <h4>Projets</h4>
          <FaChessRook />
        </div>
      </NavLink>
      <div className="moi">
        <div>
          <NavLink to="/about">
            <div>
              <FaChessKing />
              <h4>A propos de moi</h4>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/pro">
            <div>
              <FaChessQueen />
              <h4>Professionalisation</h4>
            </div>
          </NavLink>
        </div>
      </div>
      <div className={click ? "middle click" : "middle notClick"}>
        <FaChessBoard onClick={(e) => setClick(!click)} />
        <span>Clique ici</span>
      </div>
      {click ? <Me click={click} /> : null}
    </div>
  );
};

export default Home;

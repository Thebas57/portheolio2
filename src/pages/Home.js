import React from "react";
import {
  FaAdjust,
  FaChessBoard,
  FaChessKing,
  FaChessQueen,
  FaChessRook,
} from "react-icons/fa";
import Logo from "../components/Logo";
import Socials from "../components/Socials";

const Home = ({ theme, handleTheme }) => {
  //Fonction pour envoyer un mail
  const handleMailClick = () => {
    const emailAddress = "theohelf@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className={theme ? "light-theme home" : "dark-theme home"}>
      <div className="btn-top">
        <FaAdjust onClick={() => handleTheme()} />
      </div>
      <Logo />
      <Socials />
      <div className="contact">
        <h4 onClick={handleMailClick}>Contacte moi</h4>
      </div>
      <div className="skills">
        <h4>Skills</h4>
        <FaChessRook />
      </div>
      <div className="projets">
        <h4>Projets</h4>
        <FaChessRook />
      </div>
      <div className="moi">
        <div>
          <FaChessKing />
          <h4>A propos de moi</h4>
        </div>
        <div>
          <FaChessQueen />
          <h4>Mes compétences</h4>
        </div>
      </div>
      <div className="middle">
        <FaChessBoard />
        <span>Clique ici</span>
      </div>
    </div>
  );
};

export default Home;

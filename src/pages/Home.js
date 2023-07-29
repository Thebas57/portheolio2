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
import { motion } from "framer-motion";

const Home = ({ theme, handleTheme }) => {
  //Fonction pour envoyer un mail
  const handleMailClick = () => {
    const emailAddress = "theohelf@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const [click, setClick] = useState(false);

  return (
    <motion.div
      className={theme ? "light-theme home" : "dark-theme home"}
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
      transition={{ duration: 0.6 }}
    >
      <SwitchTheme handleTheme={handleTheme} />
      <Logo />
      <Socials />
      <BigTitle title="HOME" />
      <motion.div
        className="contact"
        initial={{
          y: -200,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
      >
        <h4 onClick={handleMailClick}>Contacte moi</h4>
      </motion.div>
      <NavLink to="/skills">
        <motion.div
          initial={{
            x: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            x: 50,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
        >
          <div className="skills">
            <h4>Skills</h4>
            <FaChessRook />
          </div>
        </motion.div>
      </NavLink>
      <NavLink to="/works">
        <motion.div
          initial={{
            x: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: -20,
            x: -30,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
        >
          <div className="projets">
            <h4>Projets</h4>
            <FaChessRook />
          </div>
        </motion.div>
      </NavLink>
      <div className="moi">
        <div>
          <NavLink to="/about">
            <motion.div
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
              <FaChessKing />
              <h4>À propos de moi</h4>
            </motion.div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/pro">
            <motion.div
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
              <FaChessQueen />
              <h4>Professionalisation</h4>
            </motion.div>
          </NavLink>
        </div>
      </div>
      <div className={click ? "middle click" : "middle notClick"}>
        <FaChessBoard onClick={(e) => setClick(!click)} />
        <span>Clique ici</span>
      </div>
      {click ? <Me click={click} /> : null}
    </motion.div>
  );
};

export default Home;

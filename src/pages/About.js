import React from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { GiGrandPiano } from "react-icons/gi";
import PianoParticle from "../components/PianoParticle";
import BigTitle from "../components/BigTitle";
import { motion } from "framer-motion";

const About = ({ theme, handleTheme }) => {
  const animationVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };
  return (
    <motion.div
      className={theme ? "light-theme about-page" : "dark-theme about-page"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6 }}
    >
      <SwitchTheme handleTheme={handleTheme} />
      <Logo />
      <PianoParticle handleTheme={handleTheme} theme={theme} />
      <Socials />
      <NavLink className="back" to="/">
        <FaArrowCircleLeft />
      </NavLink>
      <motion.div>
        <GiGrandPiano className="piano" />
      </motion.div>
      <BigTitle title="ABOUT" />
      <motion.div
        className="about-container"
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="about-theo">
          <div>
            Je m'appelle Théo, développeur full stack de 24 ans résidant à
            Nancy. Le frontend et le backend m'ont toujours captivé.
          </div>
          <div>
            Passionné par le développement web, j'ai un véritable penchant pour
            la découverte de nouvelles technologies et concepts. Je m'efforce
            d'élargir mes compétences pour rester à la pointe de mon domaine.
          </div>
          <div>
            Pour toute question ou collaboration, n'hésitez pas à me contacter
            via mes réseaux sociaux ou par e-mail.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

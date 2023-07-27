import React, { useEffect, useState } from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AncreScroll from "../components/AncreScroll";
import BigTitle from "../components/BigTitle";
import { motion } from "framer-motion";
import PianoParticle from "../components/PianoParticle";

const Works = ({ theme, handleTheme }) => {
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
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 25;
    setNumbers(parseInt(num));
  }, []);

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6 }}
      className={theme ? "light-theme works-page" : "dark-theme works-page"}
    >
      <div className={theme ? "light-theme works" : "dark-theme works"} id="test">
        <SwitchTheme handleTheme={handleTheme} />
        <Logo />
        <Socials />
        <NavLink className="back" to="/">
          <FaArrowCircleLeft />
        </NavLink>
        <AncreScroll numbers={numbers} />
        <BigTitle title="WORKS" />
        <div className="filter">
          <div>Filter 1</div>
          <div>Filter 2</div>
          <div>Filter 3</div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="center"
        >
          <div className="grid">
            <motion.div className="projet" variants={Item}>
              <div className="img-projet">
                <img src="./img/chesscircle.png" alt="img" />
              </div>
              <h3>Titre du Bloc</h3>
              <div className="content-projet">
                <p>Description du Bloc</p>
                <p className="langage">#ReactJs #Php</p>
              </div>
            </motion.div>
            <motion.div className="projet" variants={Item}>
              <div className="img-projet">
                <img src="./img/chesscircle.png" alt="img" />
              </div>
              <h3>Titre du Bloc</h3>
              <div className="content-projet">
                <p>Description du Bloc</p>
                <p className="langage">#ReactJs #Php</p>
              </div>
            </motion.div>{" "}
            <motion.div className="projet" variants={Item}>
              <div className="img-projet">
                <img src="./img/chesscircle.png" alt="img" />
              </div>
              <h3>Titre du Bloc</h3>
              <div className="content-projet">
                <p>Description du Bloc</p>
                <p className="langage">#ReactJs #Php</p>
              </div>
            </motion.div>{" "}
            <motion.div className="projet" variants={Item}>
              <div className="img-projet">
                <img src="./img/chesscircle.png" alt="img" />
              </div>
              <h3>Titre du Bloc</h3>
              <div className="content-projet">
                <p>Description du Bloc</p>
                <p className="langage">#ReactJs #Php</p>
              </div>
            </motion.div>{" "}
            <motion.div className="projet" variants={Item}>
              <div className="img-projet">
                <img src="./img/chesscircle.png" alt="img" />
              </div>
              <h3>Titre du Bloc</h3>
              <div className="content-projet">
                <p>Description du Bloc</p>
                <p className="langage">#ReactJs #Php</p>
              </div>
            </motion.div>{" "}
            <motion.div className="projet" variants={Item}>
              <div className="img-projet">
                <img src="./img/chesscircle.png" alt="img" />
              </div>
              <h3>Titre du Bloc</h3>
              <div className="content-projet">
                <p>Description du Bloc</p>
                <p className="langage">#ReactJs #Php</p>
              </div>
            </motion.div>{" "}
            <motion.div className="projet" variants={Item}>
              <div className="img-projet">
                <img src="./img/chesscircle.png" alt="img" />
              </div>
              <h3>Titre du Bloc</h3>
              <div className="content-projet">
                <p>Description du Bloc</p>
                <p className="langage">#ReactJs #Php</p>
              </div>
            </motion.div>{" "}
            <motion.div className="projet" variants={Item}>
              <div className="img-projet">
                <img src="./img/chesscircle.png" alt="img" />
              </div>
              <h3>Titre du Bloc</h3>
              <div className="content-projet">
                <p>Description du Bloc</p>
                <p className="langage">#ReactJs #Php</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Works;

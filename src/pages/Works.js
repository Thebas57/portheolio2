import React, { useEffect, useState } from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AncreScroll from "../components/AncreScroll";
import BigTitle from "../components/BigTitle";
import { motion } from "framer-motion";
import projets from "../json/projets.json";
import { BsGithub } from "react-icons/bs";

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
  const [filter, setFilter] = useState("Frontend");

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
      <div
        className={theme ? "light-theme works" : "dark-theme works"}
        id="test"
      >
        <SwitchTheme handleTheme={handleTheme} />
        <Logo />
        <Socials />
        <NavLink className="back" to="/">
          <FaArrowCircleLeft />
        </NavLink>
        <AncreScroll numbers={numbers} />
        <BigTitle title="WORKS" />
        <div className="filter">
          <div
            className={filter === "Frontend" ? "selected" : ""}
            onClick={(e) => setFilter("Frontend")}
          >
            Front-end
          </div>
          <div
            className={filter === "Backend" ? "selected" : ""}
            onClick={(e) => setFilter("Backend/Frontend")}
          >
            Back-end
          </div>
          <div
            className={filter === "Redux" ? "selected" : ""}
            onClick={(e) => setFilter("Backend/Redux")}
          >
            Back-end (redux)
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="center"
        >
          <div className="grid">
            {projets.map((projet) => {
              if (projet.tri === filter) {
                return (
                  <motion.div
                    className="projet"
                    variants={Item}
                    key={projet.id}
                  >
                    <div className="img-projet">
                      <img src={projet.picture} alt="img" />
                    </div>
                    <div className="header-projet">
                      <h3>{projet.name}</h3>
                      <NavLink target="_blank" to={projet.source}>
                        <BsGithub />
                      </NavLink>
                    </div>
                    <div className="content-projet">
                      <p>{projet.info}</p>
                      <p className="langage">
                        {projet.languages.map((tool) => {
                          return "#" + tool + " ";
                        })}
                      </p>
                    </div>
                  </motion.div>
                );
              }
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Works;

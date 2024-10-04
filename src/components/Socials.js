import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className="socials-container">
      <div className="social">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
        >
          <NavLink target="_blank" to="https://github.com/Thebas57">
            <FaGithub />
          </NavLink>
        </motion.div>
      </div>
      <div className="social">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
          <NavLink
            target="_blank"
            to="https://www.linkedin.com/in/th%C3%A9o-helf-446a51205/"
          >
            <FaLinkedin />
          </NavLink>
        </motion.div>
      </div>

      <div className="social">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <NavLink target="_blank" to="https://www.facebook.com/theo.helf/">
            <FaFacebook />
          </NavLink>
        </motion.div>
      </div>

      <div className="social">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.6 }}
        >
          <NavLink target="_blank" to="https://www.instagram.com/teopianno/">
            <FaInstagramSquare />
          </NavLink>
        </motion.div>
      </div>
      <motion.div
        className="line"
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      ></motion.div>
    </div>
  );
};

export default Socials;

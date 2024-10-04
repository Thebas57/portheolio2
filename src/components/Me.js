import React from "react";
import { motion } from "framer-motion";

const Me = ({ click }) => {
  return (
    <motion.div
      className={click ? "me-container display" : "me-container"}
      initial={{ height: "4vh", opacity: 0 }}
      animate={{ height: "50vh", opacity: 1 }}
      transition={{ type: "spring", duration: 2, delay: 0.4 }}
    >
      <div className="right">
        <h1>Bonjour,</h1>
        <br />
        <h3>Je suis Théo.</h3>
        <br />
        <h5>
          Développeur informatique, voici mon portfolio,{" "}
          <span>bonne visite ! </span>
        </h5>
      </div>
      <motion.div
        className="left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <img src="./portheolio2/img/profile-img.png" alt="me" />
      </motion.div>
    </motion.div>
  );
};

export default Me;

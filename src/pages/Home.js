import React from "react";
import { FaAdjust } from "react-icons/fa";

const Home = ({theme, handleTheme}) => {

  return (
    <div className={theme ? "light-theme home" : "dark-theme home"}>
      <div className="btn-top">
        <FaAdjust onClick={() => handleTheme()} />
      </div>
      Coucou c'est Théo
    </div>
  );
};

export default Home;

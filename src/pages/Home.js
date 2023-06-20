import React from "react";
import { FaAdjust } from "react-icons/fa";
import Logo from "../components/Logo";
import Socials from "../components/Socials";

const Home = ({theme, handleTheme}) => {

  return (
    <div className={theme ? "light-theme home" : "dark-theme home"}>
      <div className="btn-top">
        <FaAdjust onClick={() => handleTheme()} />
      </div>
      <Logo />
      <Socials />
    </div>
  );
};

export default Home;

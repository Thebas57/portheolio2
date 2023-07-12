import React from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Works = ({ theme, handleTheme }) => {
  return (
    <div className={theme ? "light-theme works" : "dark-theme works"}>
      <div className="img-works">
        <SwitchTheme handleTheme={handleTheme} />
        <Logo />
        <Socials />
        <NavLink className="back" to="/">
          <FaArrowCircleLeft />
        </NavLink>
      </div>
    </div>
  );
};

export default Works;

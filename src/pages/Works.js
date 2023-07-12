import React from "react";
import SwitchTheme from "../components/SwitchTheme";
import Logo from "../components/Logo";
import Socials from "../components/Socials";
import { FaArrowCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Works = ({ theme, handleTheme }) => {
  return (
    <div className={theme ? "light-theme works" : "dark-theme works"}>
      <SwitchTheme handleTheme={handleTheme} />
      <Logo />
      <Socials />
      <NavLink className="back" to="/">
        <FaArrowCircleLeft />
      </NavLink>
      <div className="filter">
        <div>Filter 1</div>
        <div>Filter 2</div>
        <div>Filter 3</div>
      </div>
      <div className="container-projets">
        <div className="projet">
          <div className="img-projet">
            <img src="./img/chesscircle.png" alt="img" />
          </div>
          <h3>Titre du Bloc</h3>
          <div className="content-projet">
            <p>Description du Bloc</p>
            <p className="langage">#ReactJs #Php</p>
          </div>
        </div>
        <div className="projet">
          <div className="img-projet">
            <img src="./img/chesscircle.png" alt="img" />
          </div>
          <h3>Titre du Bloc</h3>
          <div className="content-projet">
            <p>Description du Bloc</p>
            <p className="langage">#ReactJs #Php</p>
          </div>
        </div>{" "}
        <div className="projet">
          <div className="img-projet">
            <img src="./img/chesscircle.png" alt="img" />
          </div>
          <h3>Titre du Bloc</h3>
          <div className="content-projet">
            <p>Description du Bloc</p>
            <p className="langage">#ReactJs #Php</p>
          </div>
        </div>{" "}
        <div className="projet">
          <div className="img-projet">
            <img src="./img/chesscircle.png" alt="img" />
          </div>
          <h3>Titre du Bloc</h3>
          <div className="content-projet">
            <p>Description du Bloc</p>
            <p className="langage">#ReactJs #Php</p>
          </div>
        </div>{" "}
        <div className="projet">
          <div className="img-projet">
            <img src="./img/chesscircle.png" alt="img" />
          </div>
          <h3>Titre du Bloc</h3>
          <div className="content-projet">
            <p>Description du Bloc</p>
            <p className="langage">#ReactJs #Php</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

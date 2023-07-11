import React from "react";

const Me = ({ click }) => {
  return (
    <div className={click ? "me-container display" : "me-container"}>
      <div className="right">
        <h1>Bonjour,</h1>
        <br />
        <h3>Je suis Théo HELF.</h3>
        <br />
        <h5>
          Développeur informatique, voici mon portfolio,{" "}
          <span>bonne visite ! </span>
        </h5>
      </div>
      <div className="left">
        <img src="./img/profile-img.png" alt="me" />
      </div>
    </div>
  );
};

export default Me;

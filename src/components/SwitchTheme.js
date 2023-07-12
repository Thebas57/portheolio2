import React from "react";
import { FaAdjust } from "react-icons/fa";

const SwitchTheme = ({ handleTheme }) => {
  return (
    <div className="btn-top">
      <FaAdjust onClick={() => handleTheme()} />
    </div>
  );
};

export default SwitchTheme;

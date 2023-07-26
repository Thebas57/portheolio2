import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "../../pages/Home";
import Skills from "../../pages/Skills";
import Works from "../../pages/Works";
import Pro from "../../pages/Pro";
import About from "../../pages/About";
import { AnimatePresence } from "framer-motion";

const index = ({ theme, handleTheme }) => {
  return (
    <Router>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} handleTheme={handleTheme} />}
          />
          <Route
            path="/skills"
            element={<Skills theme={theme} handleTheme={handleTheme} />}
          />
          <Route
            path="/works"
            element={<Works theme={theme} handleTheme={handleTheme} />}
          />
          <Route
            path="/pro"
            element={<Pro theme={theme} handleTheme={handleTheme} />}
          />
          <Route
            path="/about"
            element={<About theme={theme} handleTheme={handleTheme} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default index;

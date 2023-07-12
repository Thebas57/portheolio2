import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../../pages/Home";
import Skills from "../../pages/Skills";
import Works from "../../pages/Works";
import Blog from "../../pages/Blog";
import About from "../../pages/About";

const index = ({ theme, handleTheme }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} handleTheme={handleTheme} />}
        />
        <Route path="/skills" element={<Skills />} />
        <Route
          path="/works"
          element={<Works theme={theme} handleTheme={handleTheme} />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default index;

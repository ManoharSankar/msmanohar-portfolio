import React from "react";

const Navbar = ({ darkMode, setDarkMode }) => (
  <nav className="navbar">
    <h1>M S MANOHAR</h1>
    <div>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#certifications">Certifications</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  </nav>
);

export default Navbar;

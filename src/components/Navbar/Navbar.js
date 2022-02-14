import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="#about">About</a>
      <a href="#project">Projects</a>
      <a href="#skill">Skills</a>
      <a href="#experience">Education</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Navbar;

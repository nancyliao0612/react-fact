import React from "react";
import reactLogo from "../images/react-icon-small.png";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <img src={reactLogo} alt="react-logo" className="reactLogo" />
      <span>ReactFacts</span>
      <p>React Course - Project 1</p>
    </nav>
  );
};

export default Navbar;

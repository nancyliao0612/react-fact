import React from "react";
import reactLogo from "../images/react-icon-large.png";

function Main() {
  return (
    <div className="main-container">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={reactLogo} alt="react-logo" className="background-logo" />
    </div>
  );
}

export default Main;

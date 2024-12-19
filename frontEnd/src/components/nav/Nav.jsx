import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="container-nav">
      <div className="logo">
        <img src="" alt="LOGO" />
      </div>
      <div className="nav">
        <ul>
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            {" "}
            <li>About</li>
          </a>
          <a href="">
            <li>Portfolio</li>
          </a>
          <a href="">
            {" "}
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

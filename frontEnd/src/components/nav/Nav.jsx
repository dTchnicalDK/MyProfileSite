import React from "react";
import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [isSticky, setSticky] = useState("container-nav");

  window.addEventListener("scroll", () => {
    if (scrollY > 20) {
      setSticky("container-nav sticky");
    } else {
      setSticky("container-nav ");
    }
  });

  return (
    <div className={isSticky}>
      <div className="logo">
        <img src="/logo.png" alt="LOGO" />
      </div>
      <div className="nav">
        <ul>
          <a href="">
            <li>Home</li>
          </a>
          <a href="#about">
            {" "}
            <li>About</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#contact">
            {" "}
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

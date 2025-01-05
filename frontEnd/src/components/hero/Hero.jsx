import React from "react";
import "./Hero.css";
import IsDeveloper from "../developer/IsDeveloper";

function Hero() {
  return (
    <div className="container-hero">
      <div className="salutations">
        {/* <h1>Dharmendra Chauhan</h1>
        <h3>Web & Mobile App Developer</h3> */}
        <IsDeveloper />
      </div>
      <div className="image">
        {/* <img src="./src\assets\images\photo3.png" alt="image" /> */}
        <img src="/images/photo3.png" alt="image" />
      </div>
    </div>
  );
}

export default Hero;

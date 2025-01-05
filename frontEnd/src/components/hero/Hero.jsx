import React from "react";
import "./Hero.css";
import IsDeveloper from "../developer/IsDeveloper";

function Hero() {
  return (
    <div className="container-hero">
      <div className="salutations">
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

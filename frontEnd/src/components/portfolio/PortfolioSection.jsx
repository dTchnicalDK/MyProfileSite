import React from "react";
import "./PortfolioSection.css";
import Card from "../card/Card";
import SkillGraph from "./skillGraph/SkillGraph";

function PortfolioSection() {
  return (
    <div className="portfolio-div">
      <div className="my-works">
        {" "}
        <h1>
          {" "}
          My Selected <span>works</span>
        </h1>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* ---------------skill section start--------------------- */}
      <div className="skill-container">
        <div className="skill-statements">
          <h2>I have high skills in developing and programming</h2>
          <p>
            I was doing everything in my power to provide me with all the
            experiences to provide cost-effective and high quality products to
            satisfy my customers all over the world
          </p>
        </div>
        <div className="skill-graphs">
          <SkillGraph skill="HTML" />
          <SkillGraph skill="CSS" />
          <SkillGraph skill="REACT" />
          <SkillGraph skill="EXP" />
        </div>
      </div>
      <div className="avail-freelance">
        <div className="left-div">
          <h3>I'm available for freelance work</h3>
          <div className="blink"></div>
        </div>
        <h6>contact me</h6>
      </div>
    </div>
  );
}

export default PortfolioSection;

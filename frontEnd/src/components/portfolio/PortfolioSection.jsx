import React from "react";
import "./PortfolioSection.css";
import Card from "../card/Card";
import SkillGraph from "./skillGraph/SkillGraph";

function PortfolioSection() {
  return (
    <div className="portfolio-div" id="portfolio">
      {/* ----------------------------my works section---------------------- */}
      <div className="my-works">
        <h1>
          My Selected <span>works</span>
        </h1>
        <div className="cards">
          <Card
            title={"my whiteboardApp"}
            src={"https://dtchnicaldk.github.io/whiteboardApp/"}
          />
          <Card
            title={"my note app"}
            src={"https://note2-frontend.vercel.app/"}
          />
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
          <SkillGraph skill="HTML" percent="95" />
          <SkillGraph skill="CSS" percent="80" />
          <SkillGraph skill="REACT" percent="90" />
          <SkillGraph skill="EXPRESS" percent="85" />
          <SkillGraph skill="NODE JS" percent="50" />
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

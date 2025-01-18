import "./SkillGraph.css";

import React, { useState } from "react";

function SkillGraph({ skill, percent = "30" }) {
  const progrssBarStyle = {
    height: "100%",
    backgroundColor: "goldenrod",
    width: `${percent}%`,
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  };
  return (
    <>
      <div className="graph-div">
        <div className="graph-values">
          <h3>{skill}</h3>
          <h3>{percent}%</h3>
        </div>
        <div className="graph">
          <div className="pos-graph" style={progrssBarStyle}></div>
        </div>
      </div>
    </>
  );
}

export default SkillGraph;

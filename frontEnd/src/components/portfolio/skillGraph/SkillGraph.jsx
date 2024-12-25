import "./SkillGraph.css";

import React from "react";

function SkillGraph({ skill }) {
  return (
    <>
      <div className="graph-div">
        <div className="graph-values">
          <h3>{skill}</h3>
          <h3>80%</h3>
        </div>
        <div className="graph"></div>
      </div>
    </>
  );
}

export default SkillGraph;

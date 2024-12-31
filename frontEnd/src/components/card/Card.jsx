import React from "react";
import "./Card.css";

function Card({ title, src }) {
  return (
    <div className="card">
      <a href={`${src}`} target="_blank">
        <span>Click here</span>
        <div className="my-works-iframe">
          <h2>{title}</h2>
          {/* ------------------website inside a iframe------------------------- */}
          <iframe
            src={`${src}`}
            title="whiteboardApp"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </a>
    </div>
  );
}

export default Card;

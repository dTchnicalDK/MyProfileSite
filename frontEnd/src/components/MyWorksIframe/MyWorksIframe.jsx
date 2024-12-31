import React from "react";
import "./MyWorksIfram.css";

function MyWorksIframe({ title, src }) {
  return (
    <div className="my-works-iframe">
      <h2>{title}</h2>
      <iframe
        // src="https://dtchnicaldk.github.io/whiteboardApp/"
        src={`${src}`}
        // frameBorder="0"
        title="whiteboardApp"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
}

export default MyWorksIframe;

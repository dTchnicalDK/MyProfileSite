import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimeCursor() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={30}
        outerSize={8}
        color="183, 31, 111"
        // color="#e54b4b"
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={8}
        innerStyle={{
          border: "2px solid #e54b4b",
          backgroundColor: "transparent",
        }}
        showSystemCursor={true}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}

export default AnimeCursor;

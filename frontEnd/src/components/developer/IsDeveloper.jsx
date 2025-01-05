import React, { useState } from "react";
import "./IsDeveloper.css";

function IsDeveloper() {
  const [devType, setDevType] = useState("MERN stack Developer");
  let [i, setI] = useState(0);
  let [updatedeText, setUpdatedeText] = useState("");
  let [index, setIndex] = useState(0);

  const typingEffect = setTimeout(() => {
    let sliceText = devType.slice(0, i);
    if (i === devType.length) {
      const text = [
        "FrontEnd Developer",
        "BackEnd Developer",
        "UI/UX Develper",
        "MERN stack Developer",
      ];

      setI(0);
      index === text.length - 1 ? setIndex(0) : setIndex(index + 1);
      setDevType(text[index]);
    } else {
      setI(i + 1);
    }
    setUpdatedeText(sliceText);
  }, 100);

  return (
    <div className="IsDeveloper-container">
      <h1 id="name1">Dharmendra Chauhan</h1>
      <h3 id="hi-text">
        <i>
          Hi, I am <span id="text">{updatedeText}_</span>
        </i>
      </h3>
    </div>
  );
}

export default IsDeveloper;

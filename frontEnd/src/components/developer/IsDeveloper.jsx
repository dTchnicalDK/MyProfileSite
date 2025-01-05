import React, { useState } from "react";
import "./IsDeveloper.css";

function IsDeveloper() {
  const text = [
    "MERN stack Developer",
    "FrontEnd Developer",
    "BackEnd Developer",
    "UI/UX Develper",
  ];
  const [index, setIndex] = useState(0);
  //   console.log(index);

  const [devType, setDevType] = useState(text[index]);
  let [i, setI] = useState(0);
  let [updatedeText, setUpdatedeText] = useState("");

  const typingEffect = setTimeout(() => {
    let sliceText = devType.slice(0, i);
    if (i === devType.length) {
      setI(0);
      //   setIndex(2);

      //   if (index === 3) {
      //     setIndex(0);
      //     console.log(index);
      //   } else {
      //     setIndex(index + 1);
      //   }
    } else {
      setI(i + 1);
    }
    setUpdatedeText(sliceText);
  }, 100);

  return (
    <div className="IsDeveloper-container">
      <h1>Dharmendra Chauhan</h1>
      <h3>
        <i>
          Hi, I am <span id="text">{updatedeText}_</span>
        </i>
      </h3>
    </div>
  );
}

export default IsDeveloper;

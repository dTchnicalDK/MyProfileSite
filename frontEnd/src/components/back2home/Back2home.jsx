import React, { useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import "./Back2home.css";

function Back2home() {
  const [isVisible, setIsVisible] = useState("back2home-div visible");

  window.addEventListener("scroll", () => {
    // scrollY > 100 ? "back2home-div visible" : "back2home-div";
    if (scrollY > 200) {
      setIsVisible("back2home-div visible");
    } else {
      setIsVisible("back2home-div");
    }
  });
  return (
    <div className={isVisible}>
      <TbArrowBackUp />
      <h4>Back-Home--</h4>
    </div>
  );
}

export default Back2home;

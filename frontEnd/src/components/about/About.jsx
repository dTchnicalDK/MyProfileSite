import React from "react";
import "./About.css";
import { FaAngleDoubleRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="container-aboutPage">
        <div className="prof-image-div">
          <img src="./src\assets\images\profile-image.jpg" alt="my photo" />
        </div>
        <div className="about-me">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Hello! I'm Dharmendara Chauhan. I'm a web developer, and I'm very
            passionate and dedicated to my work. I have acquired the skills and
            knowledge necessary to make your project a success. I enjoy every
            step of the design process, from discussion and collaboration.
          </p>
          <ul className="skill">
            <div className="left-list">
              {" "}
              <li>
                <span className="arrow">
                  <FaAngleDoubleRight />
                </span>
                Web Development
              </li>
              <li>
                <span className="arrow">
                  <FaAngleDoubleRight />
                </span>
                Front End Development
              </li>
              <li>
                <span className="arrow">
                  <FaAngleDoubleRight />
                </span>
                Back End development
              </li>
            </div>
            <div className="right-list">
              <li>
                <span className="arrow">
                  <FaAngleDoubleRight />
                </span>
                html, css, javascript, React, Nodejs,
              </li>
              <li>
                <span className="arrow">
                  <FaAngleDoubleRight />
                </span>{" "}
                git , git-hub, vercel, cloudinary
              </li>
              <li>
                <span className="arrow">
                  <FaAngleDoubleRight />
                </span>{" "}
                photoshop, Adobe Xd, Express
              </li>
            </div>
          </ul>
          <a href="/resume.pdf" target="_blank">
            <button className="solid-button"> Download CV </button>
          </a>
          {/* <a href="">
            <button className="solid-button"> Download CV </button>
          </a> */}
        </div>
      </div>
    </>
  );
}

export default About;

import React from "react";
import "./About.css";

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
            passionate and dedicated to my work. With 20 years experience as a
            professional web developer, I have acquired the skills and knowledge
            necessary to make your project a success. I enjoy every step of the
            design process, from discussion and collaboration.
          </p>
          <ul className="skill">
            <div className="left-list">
              {" "}
              <li>Web Development</li>
              <li>Front End Development</li>
              <li>Back End development</li>
            </div>
            <div className="right-list">
              <li>html, css, javascript, React, Nodejs,</li>
              <li> git , git-hub, vercel, cloudinary</li>
              <li> photoshop, Adobe Xd, Express</li>
            </div>
          </ul>
          <a href="">
            <button className="solid-button"> Download CV </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;

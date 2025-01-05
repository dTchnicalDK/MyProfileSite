import React from "react";
import "./About.css";
import { FaAngleDoubleRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="container-aboutPage" id="about">
        <div className="prof-image-div">
          {/* <img src="./src\assets\images\profile-image.jpg" alt="my photo" /> */}
          <img src="/images/profile-image.jpg" alt="my photo" />
        </div>
        <div className="about-me">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            <span className="span-aboutMe">
              Hi there! I’m dTechnical DK a passionate MERN stack developer
              dedicated to building dynamic web applications that enhance user
              experience. Proficient in JavaScript, MongoDB, Express.js, React,
              and Node.js, I thrive on turning innovative ideas into functional
              solutions.
            </span>{" "}
            <br />
            <span className="span-aboutMe">
              My journey in web development began with a fascination for
              technology, leading me to embrace full-stack development. I truly
              enjoy writing clean, efficient code and believe that collaboration
              is key to creating exceptional products. Working in diverse teams
              fuels my creativity and fosters a learning environment.
            </span>{" "}
            <br />
            <span className="span-aboutMe">
              Outside of coding, I love exploring new technologies, attending
              tech meetups, and working on personal projects that allow me to
              grow. I’m always eager to learn more and share insights with
              others. I’m excited to connect with fellow developers and
              innovators who share a vision for creating impactful applications.
              Let’s build something amazing together!
            </span>{" "}
            <br />
          </p>

          <a href="/resume.pdf" target="_blank">
            <button className="solid-button"> Download CV </button>
          </a>
          {/* <a href="">
            <button className="solid-button"> Download CV </button>
          </a> */}
        </div>
      </div>
      <ul className="skill">
        <div className="left-list">
          {" "}
          <li>
            <span className="arrow">
              <FaAngleDoubleRight />
            </span>
            FrontEnd Development--- HTML, CSS, JAVASCRIPT, REACT, NEXTJS
          </li>
          <li>
            <span className="arrow">
              <FaAngleDoubleRight />
            </span>
            BackEnd Development--- NODEJS, EXPRESS, NEXTJS
          </li>
          <li>
            <span className="arrow">
              <FaAngleDoubleRight />
            </span>
            Database Management--- NoSQL Databases- MongoDb
          </li>
          <li>
            <span className="arrow">
              <FaAngleDoubleRight />
            </span>
            version control system &
            <br />
            collaboration--- GIT & GIT-HUB
          </li>
          <li>
            <span className="arrow">
              <FaAngleDoubleRight />
            </span>
            Deployment and Hosting--- AWS, Heroku, Netlify
          </li>
        </div>
      </ul>
    </>
  );
}

export default About;

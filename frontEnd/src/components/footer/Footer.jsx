import React from "react";
import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="logo">
        <img src="/logo.png" alt="LOGO" />
      </div>
      <div className="social-media">
        <ul>
          <a href="https://www.facebook.com/d4dharmen" target="_blank">
            <li>
              <TiSocialFacebook className="icon" />
              <span>Facebook</span>
            </li>
          </a>
          <a href="https://x.com/home" target="_blank">
            <li>
              <TiSocialTwitter className="icon" />
              <span>Twitter</span>
            </li>
          </a>
          <a href="https://www.instagram.com/d4dharmen/" target="_blank">
            <li>
              <FaInstagramSquare className="icon" />
              <span>Instagram</span>
            </li>
          </a>
          <a
            href="https://www.youtube.com/@dharmendrachauhan-v4z"
            target="_blank"
          >
            <li>
              <IoLogoYoutube className="icon" />
              <span>YouTube</span>
            </li>
          </a>
          <a href="https://github.com/dTchnicalDK" target="_blank">
            <li>
              <FaSquareGithub className="icon" />
              <span>Github</span>
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/dharmendra-chauhan-1b7411338/"
            target="_blank"
          >
            <li>
              <FaLinkedin className="icon" />
              <span>LinkedIn</span>
            </li>
          </a>
          <a href="">
            <li></li>
          </a>
        </ul>
      </div>
      <div className="copy-right">
        <small>&copy; Copyright Reserved</small>
      </div>
    </div>
  );
}

export default Footer;

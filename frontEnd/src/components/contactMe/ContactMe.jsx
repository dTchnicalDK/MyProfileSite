import React, { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi2";
import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="contact-me-div" id="contact">
      <div className="title-div">
        <h4>Feel free to contact me anytimes </h4>
        <h2>Get in Touch</h2>
      </div>
      <div className="contact-lower-divs">
        <div className="message-me-div">
          <h3>Message Me</h3>
          <small>temporately not working</small>

          <input type="text" placeholder="Name" id="name" />
          <input type="text" placeholder="Email" id="email" />
          <input type="text" placeholder="Subject" id="text" />
          <textarea
            name="message"
            id="message"
            cols="60"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="solid-button">Send Message</button>
        </div>
        <div className="contact-info-div">
          <h3>Contact Info</h3>
          <p>
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <ul>
            <li>
              <HiUserCircle id="icon-contact" />
              <div className="list-item">
                <h5>Name</h5> <span>Dharmendra Chauhan</span>
              </div>
            </li>
            <li>
              <FaMapLocationDot id="icon-contact" />
              <div className="list-item">
                <h5>Location</h5> <span>Biharsharif, Patna</span>
              </div>
            </li>
            <li>
              <IoCallSharp id="icon-contact" />
              <div className="list-item">
                <h5>Call Me</h5> <span>+918340767765</span>
              </div>
            </li>
            <li>
              <MdEmail id="icon-contact" />
              <div className="list-item">
                <h5>Email Me</h5> <span>dtechnicaldk@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

import React from "react";
import "./Landingpage.css";
import "../../App.css";
import ParticleBg from "../../components/particle/ParticleBg";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import PortfolioSection from "../../components/portfolio/PortfolioSection";
import ContactMe from "../../components/contactMe/ContactMe";
import Back2home from "../../components/back2home/Back2home";
import AnimeCursor from "../../components/animatedCursor/AnimeCursor";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
// -------------------------------------------------------

function Landingpage() {
  return (
    <div className="main-container">
      <div className="container-landing" id="home">
        <ParticleBg />

        <div className="nav">
          <Nav />
        </div>
        <div className="hero">
          <Hero />
        </div>
      </div>
      {/* --------------about page start------------------------- */}
      <About />
      <PortfolioSection />
      <ContactMe />
      <a href="#home">
        <Back2home />
      </a>
      <Footer />
      {/* <Cursor /> */}
      {/* <AnimatedCursor /> */}
      <AnimeCursor />
    </div>
  );
}

export default Landingpage;

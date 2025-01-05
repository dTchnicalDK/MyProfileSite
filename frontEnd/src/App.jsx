import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import ParticleBg from "./components/particle/ParticleBg";
import MyWorksIframe from "./components/MyWorksIframe/MyWorksIframe";
import ContactMe from "./components/contactMe/ContactMe";
import Back2home from "./components/back2home/Back2home";
import Footer from "./components/footer/Footer";
import AnimeCursor from "./components/animatedCursor/AnimeCursor";
import IsDeveloper from "./components/developer/IsDeveloper";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

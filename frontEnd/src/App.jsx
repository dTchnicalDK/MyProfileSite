import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import ParticleBg from "./components/particle/ParticleBg";
import MyWorksIframe from "./components/MyWorksIframe/MyWorksIframe";
import ContactMe from "./components/contactMe/ContactMe";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="container-landing">
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
      </div>
    </>
  );
}

export default App;

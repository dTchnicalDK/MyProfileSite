import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import ParticleBg from "./components/particle/ParticleBg";

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
        {/* <div className="container-aboutPage"> */}
        <About />
        <PortfolioSection />
        {/* </div> */}
      </div>
    </>
  );
}

export default App;

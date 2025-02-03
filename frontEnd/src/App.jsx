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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/loginpage/Login";
import Signup from "./pages/signup/Signup";
import Landingpage from "./pages/landingPage/Landingpage";

function App() {
  return (
    <>
      {/* // creating router to route different pages */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Landingpage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

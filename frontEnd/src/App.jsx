import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/nav/hero/Hero";
import About from "./components/about/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <div className="container-landing">
          <div className="nav-bar">
            <Nav />
          </div>
          <div className="hero">
            <Hero />
          </div>
        </div>

        {/* --------------about page start------------------------- */}
        {/* <div className="container-aboutPage"> */}
        <About />
        {/* </div> */}
      </div>
    </>
  );
}

export default App;

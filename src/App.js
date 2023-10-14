import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Socials from "./components/socials/Socials";
import Experiences from "./components/experiences/Experiences";
import Portfolio from "./portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Socials />
    </>
  );
}

export default App;

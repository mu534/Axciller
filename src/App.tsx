import React from "react";
import Navbar from "./assets/components/Navbar";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Portfolio from "./assets/components/Portfolio";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Fouter";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      <Navbar />

      {/* Each section should have an id used for scrolling */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;

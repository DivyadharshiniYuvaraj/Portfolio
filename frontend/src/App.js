import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <div className="scroll-container">
        <section className="snap-section">
          <Home />
        </section>

        <section className="snap-section">
          <About />
        </section>

        <section className="snap-section">
          <Skills />
        </section>

        <section className="snap-section">
          <Projects />
        </section>

        <section className="snap-section">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
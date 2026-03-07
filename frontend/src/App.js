import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* FIXED HEADER */}
      <Header />

      {/* SCROLLABLE CONTENT */}
      <div className="scroll-container">
        <section id="home" className="snap-section">
          <div className="section-inner">
            <Home />
          </div>
        </section>

        <section id="about" className="snap-section">
          <div className="section-inner">
            <About />
          </div>
        </section>

        <section id="skills" className="snap-section">
          <div className="section-inner">
            <Skills />
          </div>
        </section>

        <section id="projects" className="snap-section">
          <div className="section-inner">
            <Projects />
          </div>
        </section>

        <section id="contact" className="snap-section">
          <div className="section-inner">
            <Contact />
          </div>
        </section>
      </div>

      {/* FIXED FOOTER */}
      <Footer />
    </>
  );
}

export default App;

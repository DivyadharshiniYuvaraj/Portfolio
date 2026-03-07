import React from "react";
import profile from "../asserts/profile.jpeg"; // we’ll add this next

export default function Home() {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1>
          Hi, I’m <span className="highlight">Divyadharshini Y</span>
        </h1>

        <p className="hero-subtitle">
          Java Full Stack Developer | JLPT N4 Certified
        </p>

        <p className="hero-desc">
          Building scalable web applications with modern frontend
          frameworks and robust backend systems.
        </p>

        <div className="hero-actions">
          <a
            href="https://github.com/DivyadharshiniYuvaraj"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/divyadharshiniy/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>

          <a href="/resume.pdf" className="btn-primary">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Divyadharshini Y" />
      </div>

    </div>
  );
}

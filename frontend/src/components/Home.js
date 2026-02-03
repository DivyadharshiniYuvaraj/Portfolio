import React from "react";

export default function Home() {
  return (
    <section className="text-center py-5">
      <h1 className="display-5 fw-bold">
        Hi, I’m <span className="text-info">Divyadharshini Y</span>
      </h1>

      <p className="lead mt-3">
        Java Full Stack Developer
      </p>

      <p className="text-muted mt-2">
        Building scalable Java applications with clean logic,
        real-world problem solving, and data-driven thinking.
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <a
          className="btn btn-outline-light"
          href="https://github.com/DivyadharshiniYuvaraj"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="btn btn-outline-light"
          href="https://www.linkedin.com/in/divyadharshiniy/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          className="btn btn-info text-dark"
          href="/resume.pdf"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
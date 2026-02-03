import React from "react";

export default function About() {
  return (
    <section className="card p-4 bg-dark text-light border-0">
      <h2 className="mb-3">About Me</h2>

      <p className="mb-4">
        Java Full Stack Developer with a background in Artificial Intelligence
        and Data Science. I focus on building reliable, scalable applications
        with clean architecture, structured databases, and maintainable code.
      </p>

      <h4 className="mt-3">Education</h4>
      <ul className="list-unstyled ms-2 mb-4">
        <li>
          <strong>B.Tech – Artificial Intelligence & Data Science</strong><br />
          Knowledge Institute of Technology, Salem (2022 – 2026)<br />
          CGPA: 8.25
        </li>
        <li className="mt-2">
          <strong>Higher Secondary Education</strong><br />
          St. Mary’s Girls Higher Secondary School (2021 – 2022)<br />
          Percentage: 86.8%
        </li>
      </ul>

      <h4 className="mt-3">Experience</h4>
      <ul className="list-unstyled ms-2">
        <li>
          <strong>Data Analyst Intern</strong> — UNIFIEDMENTOR (Remote)<br />
          <small className="text-muted">July 2024 – August 2024</small>
          <ul className="mt-2">
            <li>Worked on Financial Analytics and Crop Production Analysis projects</li>
            <li>Performed data cleaning, EDA, and pattern identification using Python</li>
            <li>Improved data quality and supported data-driven decision making</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
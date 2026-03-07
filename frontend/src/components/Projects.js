import React, { useState } from "react";
import projects from "../data/projects.json";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Java", "React", "SQL"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>

      {/* FILTER BAR */}
      <div className="project-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <div className="project-card" key={p.id}>
            <span className="project-category">{p.category}</span>

            <h3 className="project-name">{p.title}</h3>

            <p className="project-desc">{p.description}</p>

            <div className="project-tags">
              {p.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

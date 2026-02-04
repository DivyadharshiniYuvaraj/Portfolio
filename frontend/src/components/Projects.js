import React from "react";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section>
      <h2 className="mb-4">Projects</h2>

      <div className="row g-4">
        {projects.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card bg-dark text-light border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>

                <p className="card-text text-muted">
                  {p.description}
                </p>

                {p.github && (
                  <a
                    className="btn btn-sm btn-outline-info"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
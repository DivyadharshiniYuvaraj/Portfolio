import React from "react";

export default function Skills() {
  return (
    <section className="card p-4 bg-dark text-light border-0">
      <h2 className="mb-4">Skills</h2>

      <div className="row">
        <div className="col-md-4">
          <h5>Languages</h5>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>C (Basic)</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h5>Frameworks & Tools</h5>
          <ul>
            <li>Spring Boot</li>
            <li>React</li>
            <li>MySQL</li>
            <li>Power BI</li>
            <li>Streamlit</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h5>Concepts</h5>
          <ul>
            <li>REST APIs</li>
            <li>JDBC</li>
            <li>Data Analysis & EDA</li>
            <li>Clean Architecture</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
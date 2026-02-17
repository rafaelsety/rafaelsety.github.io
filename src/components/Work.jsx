import React from 'react';
import './Work.css';

const projects = [
  {
    title: "Project Name 1",
    tags: ["DevOps", "Docker"],
    description: "Detailed description of a project from your profile or an organization.",
    link: "https://github.com/rafaelsety/repo-name"
  },
  {
    title: "Project Name 2",
    tags: ["React", "Vite"],
    description: "Another great project showcase. Feel free to add more cards here.",
    link: "https://github.com/organization/repo-name"
  },
  {
    title: "Project Name 3",
    tags: ["IoT", "ESP32"],
    description: "A hardware or software project that shows your diverse skills.",
    link: "#"
  }
];

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <h2 className="section-title">Selected Works</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Repository →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

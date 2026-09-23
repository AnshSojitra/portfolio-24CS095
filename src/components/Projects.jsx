const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather application built with React that fetches real-time weather data and displays forecasts.",
  },
  {
    title: "Todo List",
    description:
      "A feature-rich task manager with drag-and-drop reordering, local storage persistence, and filter options.",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio site built with React + Vite showcasing my skills, projects, and contact information.",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

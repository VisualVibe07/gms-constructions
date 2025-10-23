function ProjectsNew() {
  const projects = [
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-1.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-2.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-3.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-4.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-5.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-6.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-7.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-8.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-9.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-10.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-11.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-12.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-13.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-14.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-15.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-16.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-17.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-18.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-19.jpg" },
    { title: "Floride Chemicals", category: "Factory", image: "/images/project-20.jpg" }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">Gellary</p>
          <div className="project-filters">
            <button className="filter-btn active">Show all</button>
            <button className="filter-btn">Intorior</button>
            <button className="filter-btn">Recent</button>
            <button className="filter-btn">Big building</button>
            <button className="filter-btn">Park</button>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h4 className="project-title">
                    <a href="#project-details">{project.title}</a>
                  </h4>
                  <h4 className="project-category">
                    <a href="#project-details">{project.category}</a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsNew

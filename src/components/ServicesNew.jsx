function ServicesNew() {
  const services = [
    {
      title: "Engineering techniques & implementation",
      link: "#",
      icon: "fas fa-cogs"
    },
    {
      title: "Engineering techniques & implementation", 
      link: "#",
      icon: "fas fa-tools"
    },
    {
      title: "Engineering techniques & implementation",
      link: "#",
      icon: "fas fa-hammer"
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Services</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h4 className="service-title">
                <a href={service.link}>{service.title}</a>
              </h4>
              <a href={service.link} className="service-link">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesNew

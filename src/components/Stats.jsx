function Stats() {
  const stats = [
    { number: "34", label: "Machinery", sublabel: "Tools" },
    { number: "76", label: "Machinery", sublabel: "Tools" },
    { number: "08", label: "Machinery", sublabel: "Tools" }
  ]

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-content">
                <p className="stat-label">{stat.label}</p>
                <h5 className="stat-sublabel">{stat.sublabel}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

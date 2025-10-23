function Team() {
  const teamMembers = [
    { name: "Ethan Welch", role: "UX Designer", image: "/images/team-1.jpg" },
    { name: "Ethan Welch", role: "UX Designer", image: "/images/team-1.jpg" },
    { name: "Ethan Welch", role: "UX Designer", image: "/images/team-3.jpg" }
  ]

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our team</h2>
          <p className="section-subtitle">exparts</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <p className="team-role">{member.role}</p>
                <h3 className="team-name">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

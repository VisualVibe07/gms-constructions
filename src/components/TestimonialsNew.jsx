function TestimonialsNew() {
  const testimonials = [
    {
      text: "Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjn.",
      author: "Jessya Inn",
      role: "Co Founder"
    },
    {
      text: "Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjn.",
      author: "Jessya Inn",
      role: "Co Founder"
    },
    {
      text: "Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjn.",
      author: "Jessya Inn",
      role: "Co Founder"
    },
    {
      text: "Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjn.",
      author: "Jessya Inn",
      role: "Co Founder"
    },
    {
      text: "Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjn.",
      author: "Jessya Inn",
      role: "Co Founder"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Testimonial</h2>
          <p className="section-subtitle">Feedback</p>
        </div>
        <div className="testimonials-slider">
          <button className="slider-btn prev"><i className="fas fa-chevron-left"></i></button>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <img src="/images/testimonial-2.jpg" alt="Client" className="testimonial-image" />
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <span className="author-name">{testimonial.author}</span>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-btn next"><i className="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsNew

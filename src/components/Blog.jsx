function Blog() {
  const blogPosts = [
    {
      title: "Footprints in Time is perfect House in Kurashiki",
      date: "24",
      month: "Now",
      category: "Porperties",
      image: "/images/blog-1.jpg"
    },
    {
      title: "Footprints in Time is perfect House in Kurashiki",
      date: "24",
      month: "Now",
      category: "Porperties",
      image: "/images/blog-2.jpg"
    }
  ]

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">latest news</h2>
          <p className="section-subtitle">Our Blog</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-date">
                  <span className="date-number">{post.date}</span>
                  <span className="date-month">{post.month}</span>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">| {post.category}</span>
                </div>
                <h2 className="blog-title">
                  <a href="#single-blog">{post.title}</a>
                </h2>
                <a href="#single-blog" className="blog-link">Read more »</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

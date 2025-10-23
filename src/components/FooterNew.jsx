function FooterNew() {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <a href="#home" className="footer-logo">GMS Constructions</a>
            <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-details">
              <p><i className="fas fa-map-marker-alt"></i> 198 West 21th Street, Suite 721 New York,NY 10010</p>
              <ul className="contact-links">
                <li><a href="#"><i className="fas fa-phone"></i> Phone: +95 (0) 123 456 789</a></li>
                <li><a href="#"><i className="fas fa-mobile-alt"></i> Cell: +95 (0) 123 456 789</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <div className="newsletter">
              <h4 className="footer-title">SIGN UP</h4>
              <input type="email" placeholder=" Email Address " className="newsletter-input" />
              <button className="newsletter-btn">SIGN UP</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 All rights reserved | Made with <span className="visual-vibe-icon">VISUAL VIBE</span></p>
        </div>
      </div>
    </footer>
  )
}

export default FooterNew

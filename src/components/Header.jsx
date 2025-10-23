function Header() {
  const toggleMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
  };

  const closeMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    navMenu.classList.remove('active');
    body.classList.remove('menu-open');
  };

  // Close menu when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('nav-menu')) {
      closeMobileMenu();
    }
  };

  return (
    <header className="header-main">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <span><i className="fas fa-phone"></i> +(123) 1234-567-8901</span>
              <span><i className="fas fa-envelope"></i> info@domain.com</span>
              <span><i className="fas fa-clock"></i> Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <div className="container">
          <div className="nav-content">
            <a href="#home" className="logo">
              <span className="logo-text">GMS Constructions</span>
            </a>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-menu" onClick={handleOverlayClick}>
              <button className="nav-close-btn" onClick={closeMobileMenu}>
                <i className="fas fa-times"></i>
              </button>
              <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
              <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
              <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
            <a href="#contact" className="contact-btn">Contact Now</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

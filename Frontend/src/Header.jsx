import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle, FaHeartbeat, FaEnvelope } from 'react-icons/fa';
import './pages/css/Header.css'
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collapseNav = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      // Use Bootstrap's Collapse instance if available, or just toggle class
      if (window.bootstrap) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(navbar);
        if (bsCollapse) bsCollapse.hide();
      } else {
        navbar.classList.remove('show');
      }
    }
  };

  return (
    <header className="fixed-top w-100" style={{ zIndex: 1030, boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none', transition: 'box-shadow 0.3s ease' }}>
      {/* Top Bar */}
      <div className="d-none d-lg-block w-100" style={{ backgroundColor: '#005b70', color: 'white', padding: '10px 0', fontSize: '13px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9 d-flex align-items-center">
              <div className="me-4 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 flex-shrink-0" />
                <span className="text-truncate">No.1558, Opp. Chandra Layout Bus Stand, Vijaynagar, Bangalore-560040</span>
              </div>
              <div className="me-4 d-flex align-items-center text-nowrap">
                <FaPhone className="me-2 flex-shrink-0" />
                <span>+91 80-23392637 / 23392630</span>
              </div>
              <div className="d-flex align-items-center">
                <FaEnvelope className="me-2 flex-shrink-0" />
                <span>info@gurushreehospital.com</span>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-end align-items-center">
              <a href="#" className="text-white me-3 text-decoration-none"><FaFacebookF /></a>
              <a href="#" className="text-white me-3 text-decoration-none"><FaTwitter /></a>
              <a href="#" className="text-white me-3 text-decoration-none"><FaLinkedinIn /></a>
              <a href="#" className="text-white text-decoration-none"><FaGoogle /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg  ${scrolled ? 'py-2' : 'py-3'}`} style={{ backgroundColor: '#80d3e5', transition: 'all 0.3s' }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={collapseNav}>
            <FaHeartbeat className="me-2" style={{ color: '#00a3c8', fontSize: '40px' }} />
            <div className="d-flex flex-column justify-content-center">
              <span className="fw-bold" style={{ color: '#222', fontSize: '24px', lineHeight: '1.1' }}>
                Gurushree
              </span>
              <span style={{ color: '#777', fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500' }}>
                Medical & Medical Health
              </span>
            </div>
          </Link>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/" onClick={collapseNav}>Home</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/about" onClick={collapseNav}>About</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/facilities" onClick={collapseNav}>Facilities</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/team" onClick={collapseNav}>Team</Link></li>
              <li className="nav-item dropdown mx-2">
                <a className="nav-link dropdown-toggle text-dark fw-medium d-flex align-items-center" href="#" id="specialitiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Medical Specialities
                </a>
                <ul className="dropdown-menu shadow border-0 mt-2" aria-labelledby="specialitiesDropdown">
                  <li><Link className="dropdown-item py-2" to="/specialities" onClick={collapseNav}>Speciality</Link></li>
                  <li><Link className="dropdown-item py-2" to="/super-specialities" onClick={collapseNav}>Super-Speciality</Link></li>
                  <li><Link className="dropdown-item py-2" to="/testing" onClick={collapseNav}>Testing</Link></li>
                  <li><Link className="dropdown-item py-2" to="/testing2" onClick={collapseNav}>Testing 2</Link></li>
                </ul>
              </li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/contact" onClick={collapseNav}>Contact</Link></li>

              <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
                <Link className="btn rounded-1 px-4 py-2 text-white" style={{ backgroundColor: '#00a3c8', fontWeight: '500', fontSize: '15px' }} to="/contact" onClick={collapseNav}>
                  Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

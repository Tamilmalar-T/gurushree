import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle, FaHeartbeat } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed-top w-100" style={{ zIndex: 1030, boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none', transition: 'box-shadow 0.3s ease' }}>
      {/* Top Bar */}
      <div className="d-none d-lg-block w-100" style={{ backgroundColor: '#005b70', color: 'white', padding: '10px 0', fontSize: '13px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 d-flex align-items-center">
              <div className="me-4 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" /> 121 King St, Melbourne, VIC 3000
              </div>
              <div className="d-flex align-items-center">
                <FaPhone className="me-2" /> (800)-569-7890
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center">
              <a href="#" className="text-white me-3 text-decoration-none"><FaFacebookF /></a>
              <a href="#" className="text-white me-3 text-decoration-none"><FaTwitter /></a>
              <a href="#" className="text-white me-3 text-decoration-none"><FaLinkedinIn /></a>
              <a href="#" className="text-white text-decoration-none"><FaGoogle /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg bg-white ${scrolled ? 'py-2' : 'py-3'}`} style={{ transition: 'all 0.3s' }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
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
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/">Home</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/about">About</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/facilities">Facilities</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/specialities">Specialities</Link></li>
              <li className="nav-item mx-2"><Link className="nav-link text-dark fw-medium" to="/contact">Contact</Link></li>

              <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
                <Link className="btn rounded-1 px-4 py-2 text-white" style={{ backgroundColor: '#00a3c8', fontWeight: '500', fontSize: '15px' }} to="/contact">
                  Make an Appointment
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

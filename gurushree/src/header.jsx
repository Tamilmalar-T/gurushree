import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className={`navbar navbar-expand-lg fixed-top premium-nav ${scrolled ? 'py-2 shadow-sm' : 'py-4'}`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="brand-icon me-2 d-flex align-items-center justify-content-center text-white rounded-3 shadow-sm" 
               style={{ width: '45px', height: '45px', background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
            <span className="fs-4 fw-bold">G</span>
          </div>
          <span className="fs-3 fw-bold tracking-tight" style={{ color: '#0f172a' }}>
            Gurushree<span className="text-primary">.</span>
          </span>
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
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/facilities">Our Facilities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/specialities">Medical Specialities</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <Link className="btn btn-premium" to="/contact">Book Appoinment</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaTumblr, FaHeartbeat, FaArrowUp } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row footer-content">
          {/* Column 1 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-logo d-flex align-items-center mb-4">
              <FaHeartbeat className="me-2" style={{ color: '#00a3c8', fontSize: '36px' }} />
              <div className="d-flex flex-column justify-content-center">
                <span className="fw-bold" style={{ color: '#fff', fontSize: '22px', lineHeight: '1.1' }}>
                  Gurushree
                </span>
                <span style={{ color: '#aaa', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '500' }}>
                  Medical & Medical Health
                </span>
              </div>
            </div>
            <p className="footer-text mb-4">
              Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta justo at velna auctor congue
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaGooglePlusG /></a>
              <a href="#" className="social-icon"><FaTumblr /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Our Location</h5>
            <p className="footer-text mb-3">
              No.1558, Opp. Chandra Layout Bus Stand,<br />
              Chandra Layout, Vijaynagar<br />
              Bangalore - 560 040
            </p>
            <p className="footer-text mb-2">
              E: <a href="mailto:info@gurushreehospital.com" className="footer-link text-decoration-underline" style={{ color: '#fff' }}>info@gurushreehospital.com</a><br />
              W: <a href="http://www.gurushreehospital.com" target="_blank" rel="noopener noreferrer" className="footer-link text-decoration-none" style={{ color: '#fff' }}>www.gurushreehospital.com</a>
            </p>
            <p className="footer-text mb-0">
              Phone: +91 80-23392637 / 23392630<br />
              Mobile: 98866 92641 / 94498 14842
            </p>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Working Time</h5>
            <div className="working-hours">
              <p className="d-flex justify-content-between footer-text mb-2">
                <span>Mon - Wed</span> <span>9:00 AM - 7:00 PM</span>
              </p>
              <p className="d-flex justify-content-between footer-text mb-2">
                <span>Thursday</span> <span>9:00 AM - 6:30 PM</span>
              </p>
              <p className="d-flex justify-content-between footer-text mb-2">
                <span>Friday</span> <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="d-flex justify-content-between footer-text mb-0">
                <span>Sat - Sun</span> <span>Closed</span>
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-heading">Emergency Cases</h5>
            <h3 className="emergency-number mb-3" style={{ color: '#00a3c8' }}>1-800-123-4560</h3>
            <p className="footer-text">
              Aliquam orci nullam undo tempor sapien gravida donec enim ipsum porta justo velna aucto magna
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="mb-0">© {new Date().getFullYear()} <strong style={{ color: '#fff' }}>Gurushree Hospital</strong>. All Rights Reserved</p>
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import heroBg from '../assets/hero_bg.png'
import About from './About'

const Home = () => {
  return (
    <main>
      {/* Hero Section Carousel */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <section className="hero-section position-relative" >
              <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row">
                  <div className="col-lg-7 col-xl-6 text-start reveal">
                    <h1 className="hero-title mb-4" style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', color: '#1e293b', letterSpacing: '-1px' }}>
                      Caring Hands, <br />
                      <span style={{ color: '#db2777' }}>Caring Hearts </span>
                    </h1>
                    <p className="hero-subtitle mb-3 pe-lg-4" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
                      GURUSHREE HI-TECH MULTISPECIALITY HOSPITAL is a 102 bedded hospital located in the heart of Chandra Layout opposite to the main bus terminal
                    </p>
                    <p className="hero-subtitle mb-5 pe-lg-4" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
                      The goal is to provide advanced and quality care to the ailing patients with both allopathic and integrated medicine under one roof. It is an advanced Trauma and critical care center with professionally trained staff.                    </p>
                    <div className="d-flex flex-wrap gap-3 mt-4">
                      <Link
                        to="/about"
                        className="btn rounded-1 px-5 py-3 text-white shadow-sm"
                        style={{
                          backgroundColor: '#007b99',
                          border: 'none',
                          fontWeight: '600',
                          fontSize: '15px'
                        }}
                      >
                        More About Clinic
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <section className="hero-section position-relative" style={{ backgroundImage: `url('/hospital_bg.jpg')` }}>
              <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row">
                  <div className="col-lg-7 col-xl-6 text-start reveal">
                    <h1 className="hero-title mb-4" style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', color: '#1e293b', letterSpacing: '-1px' }}>
                      State-of-the-Art <br />
                      <span style={{ color: '#0ea5e9' }}>Facilities</span>
                    </h1>
                    <p className="hero-subtitle mb-5 pe-lg-4" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
                      Equipped with modern technology and a dedicated 24/7 trauma care center to handle medical emergencies with utmost precision and care.
                    </p>

                    <div className="d-flex flex-wrap gap-3 mt-4">
                      <Link to="/facilities" className="btn rounded-1 px-5 py-3 text-white shadow-sm" style={{ backgroundColor: '#e0f6fb', color: '#00a3c8', fontWeight: '600', fontSize: '15px' }}>
                        Our Facilities
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <section className="hero-section position-relative" style={{ backgroundImage: `url(${heroBg})` }}>
              <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row">
                  <div className="col-lg-7 col-xl-6 text-start reveal">
                    <h1 className="hero-title mb-4" style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', color: '#1e293b', letterSpacing: '-1px' }}>
                      Expert Medical <br />
                      <span style={{ color: '#10b981' }}>Professionals</span>
                    </h1>
                    <p className="hero-subtitle mb-5 pe-lg-4" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
                      A dedicated team of over 150+ expert staff committed to providing holistic allopathic and integrated medicine for a healthier tomorrow.
                    </p>

                    <div className="d-flex flex-wrap gap-3 mt-4">
                      <Link to="/contact" className="btn rounded-1 px-5 py-3 text-white shadow-sm" style={{ backgroundColor: '#e0f6fb', color: '#00a3c8', fontWeight: '600', fontSize: '15px' }}>
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>


      {/* Promotional Banner */}
      <section className="py-4 mt-5">
        <div className="container">
          <div className="bg-warning bg-opacity-10 border border-warning border-opacity-25 rounded-5 p-4 shadow-sm">
            <div className="row align-items-center">
              <div className="col-md-7 d-flex align-items-center">
                <div className="promo-badge bg-success text-white rounded-circle d-flex flex-column align-items-center justify-content-center me-4 shadow" style={{ width: '90px', height: '90px', border: '4px dashed white' }}>
                  <span className="small mb-0">Get</span>
                  <span className="fw-bold fs-4">25%</span>
                  <span className="small mt-n1">OFF</span>
                </div>
                <div>
                  <h3 className="fw-extrabold mb-1" style={{ color: '#854d0e' }}>Health Packages</h3>
                  <p className="mb-0 text-dark opacity-75">Limited time offer on comprehensive body checkups.</p>
                </div>
              </div>
              <div className="col-md-5 mt-4 mt-md-0 text-md-end border-start-md ps-md-5">
                <h4 className="fw-bold mb-1">Call for Enquiry:</h4>
                <div className="fs-5 fw-bold text-primary">
                  080-23392641 <span className="text-muted px-2">/</span> 98866 92641
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
<About />
    </main>
  
  
  )
}

export default Home


import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import heroBg from '../assets/hero_bg.png'
import About from './About'
import Facilities from './Facilities'
import Specialities from './Specialities'
import Team from './Team'
import Contact from './Contact'
import SuperSpecialities from './SuperSpecialities'
import Template3 from './Template3'

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
                    <h1 className="hero-title mb-4">
                      Caring Hands, <br />
                      <span className="hero-span-pink">Caring Hearts </span>
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
                    <h1 className="hero-title mb-4">
                      State-of-the-Art <br />
                      <span className="hero-span-blue">Facilities</span>
                    </h1>
                    <p className="hero-subtitle mb-5 pe-lg-4" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
                      Equipped with modern technology and a dedicated 24/7 trauma care center to handle medical emergencies with utmost precision and care.
                    </p>

                    <div className="d-flex flex-wrap gap-3 mt-4">
                      <Link to="/facilities" className="btn rounded-1 px-5 py-3 shadow-sm" style={{ backgroundColor: '#e0f6fb', color: '#00a3c8', fontWeight: '600', fontSize: '15px' }}>
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
                    <h1 className="hero-title mb-4">
                      Expert Medical <br />
                      <span className="hero-span-green">Professionals</span>
                    </h1>
                    <p className="hero-subtitle mb-5 pe-lg-4" style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
                      A dedicated team of over 150+ expert staff committed to providing holistic allopathic and integrated medicine for a healthier tomorrow.
                    </p>

                    <div className="d-flex flex-wrap gap-3 mt-4">
                      <Link to="/contact" className="btn rounded-1 px-5 py-3 shadow-sm" style={{ backgroundColor: '#e0f6fb', color: '#00a3c8', fontWeight: '600', fontSize: '15px' }}>
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

      {/* 3-Column Info Cards Section */}
     <section
  className="info-cards-section position-relative"
  style={{ marginTop: '-80px', zIndex: 10 }}
>
  <div className="container">

    <div className="info-card-wrapper">

      {/* Card 1 */}
      <div className="info-card offer-card">
        <div className="offer-circle">
          <span className="offer-small">GET</span>
          <span className="offer-percent">25%</span>
          <span className="offer-small">OFF</span>
        </div>

        <div>
          <h5 className="fw-bold mb-1">Special Discount</h5>
          <p className="mb-0">
            Exclusive offers on selected health checkup packages.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="info-card package-card">
        <div className="info-icon">
          🏥
        </div>

        <div>
          <h4 className="fw-bold mb-2">Health Packages</h4>
          <p className="mb-0">
            Complete preventive health checkups for your family.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="info-card enquiry-card">
        <div className="info-icon">
          📞
        </div>

        <div>
          <h5 className="fw-bold mb-2">Call for Enquiry</h5>

          <div className="contact-number">
            080-23392641
          </div>

          <div className="contact-number">
            98866 92641
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

      
<About isHome={true} />
<Facilities isHome={true} />
<Template3 isHome={true} />


<Contact isHome={true} />
    </main>
  
  
  )
}

export default Home


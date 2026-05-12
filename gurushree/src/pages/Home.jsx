import React from 'react'
import heroImg from '../assets/hero.png'
import { Link } from 'react-router-dom'
import './css/Home.css'

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section pb-0">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-8 reveal">
              <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 mb-4 fw-semibold">
                Advanced Trauma & Critical Care Center
              </span>
              <h1 className="hero-title mb-4">
                Gurushree Hi-Tech <br />
                Multispeciality Hospital<span className="text-primary">.</span>
              </h1>
              <p className="hero-subtitle text-dark fw-medium mb-3">
                A 102-bedded hospital located in the heart of Chandra Layout opposite to the main bus terminal.
              </p>
              <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                Our goal is to provide advanced and quality care to the ailing patients with both allopathic and integrated medicine under one roof. We are an advanced Trauma and critical care center with professionally trained staff.
                <Link to="/about" className="text-primary ms-2 fw-bold text-decoration-none">read on...</Link>
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                <Link to="/contact" className="btn btn-premium btn-lg px-5 shadow-lg">Book Appointment</Link>
                <button className="btn btn-outline-dark btn-lg px-5 rounded-pill border-2">Our Services</button>
              </div>

              <div className="mt-5 d-flex align-items-center justify-content-center gap-4">
                <div className="stat text-center">
                  <h3 className="fw-bold mb-0">102</h3>
                  <p className="text-muted small mb-0">Total Beds</p>
                </div>
                <div className="vr text-muted opacity-25"></div>
                <div className="stat text-center">
                  <h3 className="fw-bold mb-0">150+</h3>
                  <p className="text-muted small mb-0">Expert Staff</p>
                </div>
                <div className="vr text-muted opacity-25"></div>
                <div className="stat text-center">
                  <h3 className="fw-bold mb-0">24/7</h3>
                  <p className="text-muted small mb-0">Trauma Care</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-4">
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

      {/* Services Brief */}
      {/* <section id="services" className="py-5 bg-white">
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-5">Why Choose Gurushree?</h2>
          <div className="row g-4 text-start">
            {[
              { title: 'Trauma Care', desc: 'Advanced trauma and critical care center with expert staff.', icon: '🚑' },
              { title: 'Integrated Medicine', desc: 'Combined allopathic and integrated medical solutions.', icon: '🧪' },
              { title: 'Central Location', desc: 'Located in the heart of Chandra Layout for easy access.', icon: '📍' },
              { title: 'Pharmacy', desc: '24/7 available pharmacy within the premises.', icon: '💊' }
            ].map((item, index) => (
              <div key={index} className="col-md-3">
                <div className="card border-0 shadow-sm p-4 h-100 rounded-4 transition-all hover-up">
                  <div className="fs-2 mb-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  )
}

export default Home

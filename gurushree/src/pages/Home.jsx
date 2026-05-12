import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import heroBg from '../assets/hero_bg.png'

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section position-relative" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-7 col-xl-6 text-start reveal">
              <h1 className="hero-title mb-4" style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', color: '#e2e8f0', letterSpacing: '-1px' }}>
                With a Touch <br />
                <span style={{ color: '#f4b8c6' }}>of Kindness</span>
              </h1>
              <p className="hero-subtitle mb-5 pe-lg-4" style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Gurushree Hi-Tech Multispeciality Hospital is a 102-bedded facility located in the heart of Chandra Layout. We provide advanced trauma and quality care to ailing patients under one roof.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/about" className="btn rounded-1 px-5 py-3 text-white shadow-sm" style={{ backgroundColor: '#e0f6fb', color: '#00a3c8', fontWeight: '600', fontSize: '15px' }}>
                  More About Clinic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-5 mt-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
               <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap">
                  <div className="stat text-center">
                    <h3 className="fw-bold mb-0 fs-1" style={{color: '#005b70'}}>102</h3>
                    <p className="text-muted small mb-0 text-uppercase fw-bold">Total Beds</p>
                  </div>
                  <div className="vr text-muted opacity-25 d-none d-md-block" style={{height: '50px', width: '2px'}}></div>
                  <div className="stat text-center">
                    <h3 className="fw-bold mb-0 fs-1" style={{color: '#005b70'}}>150+</h3>
                    <p className="text-muted small mb-0 text-uppercase fw-bold">Expert Staff</p>
                  </div>
                  <div className="vr text-muted opacity-25 d-none d-md-block" style={{height: '50px', width: '2px'}}></div>
                  <div className="stat text-center">
                    <h3 className="fw-bold mb-0 fs-1" style={{color: '#005b70'}}>24/7</h3>
                    <p className="text-muted small mb-0 text-uppercase fw-bold">Trauma Care</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home

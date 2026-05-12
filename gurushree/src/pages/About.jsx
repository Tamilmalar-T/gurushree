import React from 'react'
import './css/About.css'

const About = () => {
  return (
    <div className="py-5 about-page">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold mb-4">About Gurushree Medical</h1>
            <p className="lead text-muted mb-4">
              Providing exceptional healthcare services since 2010. Our mission is to provide high-quality, compassionate, and accessible healthcare.
            </p>
            <p className="mb-4">
              Gurushree Medical has been a cornerstone of the community, offering a wide range of medical services from diagnostics to surgery. Our state-of-the-art facility is designed to provide a comfortable and healing environment for our patients.
            </p>
            <div className="row g-4 mt-2">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="vision-mission-icon me-3">🎯</div>
                  <div>
                    <h6 className="fw-bold mb-0">Our Vision</h6>
                    <p className="small text-muted mb-0">Global leader in care</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="vision-mission-icon me-3">🚀</div>
                  <div>
                    <h6 className="fw-bold mb-0">Our Mission</h6>
                    <p className="small text-muted mb-0">Patient first always</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default About

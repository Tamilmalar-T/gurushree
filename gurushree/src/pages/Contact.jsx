import React from 'react'
import './css/Contact.css'

const Contact = () => {
  return (
    <div className="py-5 bg-white contact-page">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5">
            <h1 className="fw-bold mb-4">Get in Touch</h1>
            <p className="text-muted mb-5">Have questions? We are here to help you. Reach out to us via any of the following channels.</p>
            
            <div className="d-flex mb-4 contact-info-item">
              <div className="contact-icon-box me-4">📍</div>
              <div>
                <h6 className="fw-bold mb-1">Our Location</h6>
                <p className="text-muted small mb-0">123 Hospital Road, Bangalore, India</p>
              </div>
            </div>
            
            <div className="d-flex mb-4 contact-info-item">
              <div className="contact-icon-box me-4">📞</div>
              <div>
                <h6 className="fw-bold mb-1">Phone Number</h6>
                <p className="text-muted small mb-0">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="d-flex contact-info-item">
              <div className="contact-icon-box me-4">✉️</div>
              <div>
                <h6 className="fw-bold mb-1">Email Address</h6>
                <p className="text-muted small mb-0">contact@gurushree.com</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="card border-0 shadow p-4 p-md-5 contact-card">
              <h3 className="fw-bold mb-4">Send us a Message</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control form-control-lg bg-light border-0" placeholder="Email Address" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control form-control-lg bg-light border-0" rows="5" placeholder="Message"></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-premium btn-lg w-100">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

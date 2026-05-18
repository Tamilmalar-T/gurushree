import React from 'react'
import './css/Contact.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <span className="contact-subtitle">CONTACT US</span>
          <h1 className="contact-title mt-3">We’re Always Ready To Help You</h1>
          <p className="contact-description mx-auto">
            Reach out to our medical team for appointments, emergency support, or general enquiries.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">

          {/* Left Info */}
          <div className="col-lg-5">
            <div className="contact-info-wrapper h-100">

              <div className="contact-info-card d-flex">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h5>Hospital Address</h5>
                  <p>123 Hospital Road, Bangalore, India</p>
                </div>
              </div>

              <div className="contact-info-card d-flex">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h5>Phone Number</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-info-card d-flex">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h5>Email Address</h5>
                  <p>contact@gurushree.com</p>
                </div>
              </div>

            </div>
          </div>
{/* right Side Image  */}
          <div className="col-lg-7">
  <div className="contact-image-box h-100">
    <img
      src="../Image/bannerbg.jpg"
      alt="Contact"
      className="img-fluid w-100 h-100 contact-side-image"
    />
  </div>
</div>
      

        </div>
      </div>
    </section>
  )
}

export default Contact
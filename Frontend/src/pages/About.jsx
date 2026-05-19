import React from 'react'
import './css/About.css'

const About = () => {
  return (
    <div className="py-5 about-page">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Side Image */}
          <div className="col-lg-5 d-flex justify-content-center">
            <div className="about-img-wrapper"></div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-7">
            <h2
              className="fw-bold mb-4"
              style={{ color: '#005b70' }}
            >
              About Gurushree Hospital
            </h2>

            <p
              className="text-muted mb-4"
              style={{ lineHeight: '1.8', fontSize: '1.05rem' }}
            >
              <strong className="text-dark">2.5 years</strong> of medical
              experience and expertise of the founder{" "}
              <strong>Dr. S.B. GANGADHAR</strong> at Gurushree Hospital has
              resulted in a much needed multi speciality state of the art,
              all-in-one medical center with highly qualified specialist
              doctors, trained paramedical staff and A-1 grade in-patient
              and out-patient facilities.
            </p>

            <p
              className="text-muted mb-4"
              style={{ lineHeight: '1.8', fontSize: '1.05rem' }}
            >
              Exceptional clinical success rates, traditional care & warmth
              with superior technology makes Gurushree Hospital a trusted
              healthcare destination focused on personalised patient care.
            </p>

            <p
              className="text-muted mb-4"
              style={{ lineHeight: '1.8', fontSize: '1.05rem' }}
            >
              Gurushree hi-tech multi speciality hospital is the only
              multi speciality hospital around Vijaynagar, Magadi Road and
              Nagarbhavi within a radius of 4.5 km having facilities under
              one roof.
            </p>

            <p
              className="fw-bold mb-4"
              style={{ color: '#00a3c8', fontSize: '1.1rem' }}
            >
              Dr. Rohith S.G. is the CEO of Gurushree Hospital.
            </p>

         
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
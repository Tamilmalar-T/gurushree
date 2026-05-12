import React, { useState } from 'react'
import './css/Specialities.css'

const Specialities = () => {
  const [activeTab, setActiveTab] = useState(0);

  const specs = [
    { name: 'Anaesthesiology', detail: 'Comprehensive pain management and critical care during surgical procedures, ensuring patient safety and comfort.'},
    { name: 'Casualty / Emergency', detail: '24/7 rapid response and life-saving treatments for critical injuries and sudden illnesses.' },
    { 
      name: 'Dentistry', 
      
      customContent: (
        <div className="mb-5 w-100">
          <h5 className="fw-bold text-primary mb-3">Treatment Available in Dental Department:</h5>
          <ul className="text-muted fs-8 lh-lg mb-4" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>ICU Supported Maxillofacial Surgery and Implant Procedures</li>
            <li>Facial Surgeries</li>
            <li>Cosmetic Dental Procedures with minimum invasive techniques</li>
            <li>Orthodontic Treatment</li>
            <li>Endodontic Treatment (By using Radio Frequency Cautery)</li>
            <li>Periodontal Surgery including Bone Grafting Procedures</li>
            <li>Other Procedures like Filling, Scaling, Prosthodontic treatment</li>
          </ul>

          <h5 className="fw-bold text-secondary text-uppercase mt-4 mb-3" style={{ fontSize: '1.1rem' }}>Tooth Whitening Procedures</h5>
          <div className="row g-4">
            <div className="col-sm-6 col-md-5">
              <div className="card border-light shadow-sm text-center p-2">
                {/* Ensure you place the actual image file path in the src below */}
                <img src="../Image/bannerbg.jpg" alt="Tooth Whitening Before" className="img-fluid rounded mb-2" style={{ maxHeight: '150px', objectFit: 'cover', width: '100%', backgroundColor: '#f8f9fa' }} />
                <p className="text-muted fw-semibold mb-0 py-1">Before</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-5">
              <div className="card border-light shadow-sm text-center p-2">
                {/* Ensure you place the actual image file path in the src below */}
                <img src="../Image/bannerbg.jpg" alt="Tooth Whitening After" className="img-fluid rounded mb-2" style={{ maxHeight: '150px', objectFit: 'cover', width: '100%', backgroundColor: '#f8f9fa' }} />
                <p className="text-danger fw-semibold mb-0 py-1">After</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { name: 'Dermatology', detail: 'Expert care for skin, hair, and nail disorders, including clinical and cosmetic treatments.' },
    { name: 'ENT', detail: 'Specialized diagnosis and treatment for ear, nose, throat, and head and neck conditions.' },
    { name: 'General Surgery', detail: 'Minimally invasive and comprehensive surgical solutions for a wide range of medical conditions.'},
    { name: 'Internal Medicine', detail: 'Holistic diagnosis and management of adult diseases, providing primary and specialty care.' },
    { name: 'Laboratory Medicine', detail: 'State-of-the-art diagnostic testing and pathology services for accurate clinical assessments.'},
    { name: 'Nephrology', detail: 'Comprehensive kidney care including dialysis, treatment of kidney stones, and chronic kidney disease management.' },
    { name: 'Obstetrics and Gynecology', detail: 'Complete women\'s health care from maternity and childbirth to reproductive health and wellness.' },
    { name: 'Ophthalmology', detail: 'Advanced eye care, vision correction, and surgical treatments for various optical conditions.' },
    { name: 'Orthopedics', detail: 'Expert treatment for bone, joint, and spine disorders, including trauma and joint replacement surgeries.' },
    { name: 'Physiotherapy', detail: 'Rehabilitation and physical therapy to restore movement, relieve pain, and improve physical function.'},
    { name: 'Psychiatry', detail: 'Compassionate mental health services offering counseling, diagnosis, and treatment for psychological well-being.'},
    { name: 'Urology', detail: 'Specialized care for urinary tract conditions and male reproductive system disorders.' }
  ];

  const activeSpec = specs[activeTab];

  return (
    <div className=" specialities-page bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">Medical Specialities</h1>
          <p className="text-muted">Expert doctors in diverse fields of medicine.</p>
        </div>
        
        <div className="row g-4">
          {/* Left Side: List of Specialities */}
          <div className="col-lg-4 col-md-5">
            <div className="specialities-list list-group shadow-sm rounded-4 overflow-auto bg-white border border-light" style={{ maxHeight: '600px' }}>
              {specs.map((s, i) => (
                <button
                  key={i}
                  className={`list-group-item list-group-item-action py-3 px-4 fw-semibold border-0 border-bottom spec-tab ${activeTab === i ? 'active bg-primary text-white' : 'text-secondary'}`}
                  onClick={() => setActiveTab(i)}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Details of Selected Speciality */}
          <div className="col-lg-8 col-md-7">
            <div className="speciality-details p-5 rounded-4 shadow-sm bg-white h-100 d-flex flex-column justify-content-center align-items-start border border-light animate-fade-in" key={activeTab}>
              <h2 className="fw-bold mb-3 text-primary display-6">{activeSpec.name}</h2>
              {activeSpec.customContent ? (
                activeSpec.customContent
              ) : (
                <p className="text-muted fs-5 lh-lg mb-5">
                  {activeSpec.detail}
                </p>
              )}
              
              <div className="w-100 border-top pt-4 mt-auto">
                <div className="d-flex align-items-center flex-wrap gap-3">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialities

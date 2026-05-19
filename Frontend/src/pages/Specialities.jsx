import React, { useState } from 'react'
import './css/Specialities.css'

const Specialities = () => {
  const [activeTab, setActiveTab] = useState(0);


  const specs = [
    { name: 'Anaesthesiology', detail: 'Comprehensive pain management and critical care during surgical procedures, ensuring patient safety and comfort.' },
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
    {
      name: 'ENT',
      customContent: (
        <div className="mb-5 w-100">
          <p className="text-muted lh-lg mb-4">
            The department is dedicated to expanding the frontiers of diagnosis, treatment and research of disorders of the ear, nose and sinuses, throat and the anterior skull base.
          </p>
          <p className="text-muted lh-lg mb-4">
            Excellence is demonstrated daily through center's sophisticated use of flexible and rigid endoscopes, newly developed video camera system and fine binocular microscopes. With the help of world class equipment available in our outpatient department several procedures like endoscopic cauterization in epitasis patient and biopsies of certain nose and throat lesions could be performed.
          </p>

          <h5 className="fw-bold text-primary mb-3">ENT Surgeries includes</h5>
          <ol className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem' }}>
            <li>Regular tonsillectomy</li>
            <li>Endoscopic assisted adenoidectomy</li>
            <li>Septoplasty</li>
            <li>Turbinoplasty Partial Turbinectomy</li>
            <li>Functional Endoscopic sinus surgeries</li>
            <li>Surgeries for bleed related disorders sensory / apnoea and laser assisted and regular UPPP</li>
            <li>Microscopic ear surgeries like myringotomy, myringoplasty, tympanoplasty, mastoid exploration with hearing enhancement like ossiculoplasties</li>
            <li>
              Microscopic laryngeal surgeries for voice disorders
              <ul style={{ listStyleType: 'lower-roman', paddingLeft: '1.5rem', marginTop: '0.25rem', marginBottom: '0.25rem' }}>
                <li>Microlaryngeal surgeries</li>
                <li>Thyroplasties for changing voices</li>
                <li>Lateralization and meidalization of vocal cords</li>
              </ul>
            </li>
            <li>Cosmetic surgeries - septorhinoplasty</li>
            <li>Head and neck surgeries including malignancies</li>
          </ol>
        </div>
      )
    },
    { name: 'General Surgery', detail: 'Minimally invasive and comprehensive surgical solutions for a wide range of medical conditions.' },
    { name: 'Internal Medicine', detail: 'Holistic diagnosis and management of adult diseases, providing primary and specialty care.' },
    { name: 'Laboratory Medicine', detail: 'State-of-the-art diagnostic testing and pathology services for accurate clinical assessments.' },
    {
      name: 'Nephrology',
      customContent: (
        <div className="mb-5 w-100">
          <ul className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>
              Dialysis
              <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', marginTop: '0.25rem', marginBottom: '0.25rem' }}>
                <li>CRPT</li>
                <li>Plasmapherisis / SLED</li>
              </ul>
            </li>
            <li>Renal Biopsy</li>
          </ul>
        </div>
      )
    },
    {
      name: 'Obstetrics and Gynecology',
      customContent: (
        <div className="mb-5 w-100">
          <h5 className="fw-bold text-primary mb-3">Department of Obstetrics and Gynecology (OBG)</h5>
          <p className="text-muted lh-lg mb-4">
            Department of OBG deals with Labor and women related problems. Both Outpatient and Inpatient services are offered. For delivery cozy Birthing Suite facility is available
          </p>
          <p className="text-muted lh-lg mb-3">
            The department is specialized in the following services:
          </p>
          <ol className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem', listStyleType: 'lower-alpha' }}>
            <li>Colposcopy</li>
            <li>Epidural Analgesia</li>
            <li>High risk pregnancy</li>
            <li>Infertility</li>
            <li>Minimally Invasive Surgery</li>
            <li>Routine Obstetrics and Gynecology procedures</li>
            <li>Vaginal Hysterectomy</li>
          </ol>
        </div>
      )
    },
    { name: 'Ophthalmology', detail: 'Advanced eye care, vision correction, and surgical treatments for various optical conditions.' },
    {
      name: 'Orthopedics',
      customContent: (
        <div className="mb-5 w-100">
          <h5 className="fw-bold text-primary mb-3">Department of Orthopedics</h5>
          <p className="text-muted lh-lg mb-4">
            The department of Orthopedics is a contemporary well equipped department of Gurushree Hospital. 24 hours emergency services including managing Accidents and trauma patients are offered. The Department can boast of developed sub-specialties with excellent infrastructure and experienced surgeons to tackle all kinds of orthopaedic problems. The subspecialties include Routine Orthopedic ailments, Arthritics clinic and Back & Neck clinic.
          </p>
          <p className="text-muted lh-lg mb-3">
            Following are the specialist procedures:
          </p>
          <ol className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem' }}>
            <li>Arthroscopy and Ligament repair</li>
            <li>Geriatric care</li>
            <li>Total Hip and Knee replacement</li>
            <li>Poly trauma care and minimally invasive fracture fixation</li>
            <li>Spine Instrumentation and Vertebroplasty</li>
            <li>Sports injury</li>
            <li>Pediatric deformity correction</li>
            <li>Illizarov Ring fixation and Limb lengthening</li>
          </ol>
          <p className="text-muted lh-lg mb-4">
            The department is supported by the most elaborate intensive care services, a modern Accident and Emergency department, and state of the art Physiotherapy and Rehabilitation department. We have established trauma protocols for the care of the critically injured patients and principles of Advanced Trauma and Life Support System (ATLS) are applied for the prompt and efficient treatment of accident victims.
          </p>
        </div>
      )
    },
    { name: 'Physiotherapy', detail: 'Rehabilitation and physical therapy to restore movement, relieve pain, and improve physical function.' },
    {
      name: 'Psychiatry',
      customContent: (
        <div className="mb-5 w-100">
          <p className="text-muted lh-lg mb-4">
            Psychiatric services are provided to both out patients and in-patients. In addition there are referrals from various departments of Internal medicine, cardiology, endocrinology and Diabetics, Nephrology, Neurology, Neuro-Surgery, OBG and others for Psychiatric and Psycho-social interventions.
          </p>
          <p className="text-muted lh-lg mb-4">
            Various psychological techniques are employed in the treatment of psychiatric Disorders. Their aim is not only symptom relief but also better adaptation, leading onto improvement in social and vocational functioning and personality growth.
          </p>
          <p className="text-muted lh-lg mb-4">
            A wide array of psychological approaches (therapies) are employed in practice and when used in combination with pharmacological approach can enhance the outcome in the treatment of psychiatric disorders.
          </p>
          <p className="text-muted lh-lg mb-4">
            Psychiatric interviews are conducted to gather relevant information to help the clinician to arrive at an appropriate diagnosis and also to understand the psychological problems of the individual on the backdrop of his own personal life circumstances.
          </p>
          <p className="text-muted fw-bold lh-lg mb-3">
            The following are the therapies that have been offered :
          </p>
          <ul className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Psychotherapy</li>
            <li>Marital therapy</li>
            <li>Family therapy</li>
            <li>Alcohol and drug detoxification and treatment</li>
            <li>Electro convulsive therapy</li>
          </ul>
        </div>
      )
    },
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
            <div className="specialities-list list-group shadow-sm rounded-4 bg-white border border-light" style={{ maxHeight: '600px', overflowY: 'auto', overflowX: 'hidden' }}>
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

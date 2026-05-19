import React, { useState } from 'react'
import './css/Specialities.css'

const SuperSpecialities = () => {
  const [activeTab, setActiveTab] = useState(0);

  const specs = [
    { name: 'Endocrinology / Diabetes', detail: 'Advanced care and management of hormonal imbalances, diabetes, and metabolic disorders.' },
    { 
      name: 'Gastroenterology', 
      customContent: (
        <div className="mb-5 w-100">
          <p className="text-muted lh-lg mb-4">
            Our 24/7 services of Gastroenterology is a super specialty that involves management of patients suffering from disorders of digestive system and liver. These patients may be suffering from simple problems like indigestion or dyspepsia, constipation, pain in the abdomen, jaundice, diarrhea or difficult problems like blood in the vomiting or stools, liver cirrhosis, swelling abdomen, bile duct stones, cancers of gall bladder, pancreas, food pipe, stomach or intestine. Our patients are cared for by teams of physicians with broad expertise in all forms of gastroenterological and hepatobiliary diseases.
          </p>
          <p className="text-muted lh-lg mb-4">
            Department of Gastroenterology is providing outpatient, inpatient and endoscopic service to the society. Service is provided 24 hours and tackles various kinds of Gastroenterology emergency cases requiring diagnostic and therapeutic endoscopic procedures.
          </p>
          <h5 className="fw-bold text-primary mb-3">Facilities/services:</h5>
          <ol className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem' }}>
            <li className="mb-2"><strong>Gastroscopy (OGD):</strong> Procedure enables to study the upper gastrointestinal tract esophagus-stomach-duodenum</li>
            <li className="mb-2"><strong>Colonoscopy:</strong> Procedure enables to study the lower Gastrointestinal tract entire colon including the last portion of the small intestine</li>
            <li className="mb-2"><strong>ERCP:</strong> Endoscopic method of studying the biliary tree and Pancreatic tree. This procedure helps in various pancreatico-biliary diseases like Biliary stones, pancreatic stones, Biliary-pancreatic cancer and placement of an artificial tube (Stent) to reduce Obstructive jaundice</li>
            <li className="mb-2"><strong>Capsule Endoscopy:</strong> Evaluates small intestine which cannot be assessed by Gastoscope and Colonoscope</li>
          </ol>
        </div>
      )
    },
    { 
      name: 'Oral & Maxillofacial Surgery', 
      customContent: (
        <div className="mb-5 w-100">
          <ol className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem', listStyleType: 'lower-alpha' }}>
            <li>Painless tooth removal</li>
            <li>Fracture reduction</li>
            <li>Re-Implantation of lost tooth</li>
            <li>Cyst/Tumor removal</li>
            <li>Soft tissue repair</li>
            <li>Implants</li>
            <li>Scar revision</li>
            <li>Orthognathic surgery</li>
            <li>Treatment for Oral cancer</li>
          </ol>
        </div>
      )
    },
    { name: 'Neurology', detail: 'Expert diagnosis and management of nervous system disorders, including the brain, spinal cord, and peripheral nerves.' },
    { name: 'Neuro Surgery', detail: 'Advanced surgical interventions for complex neurological conditions affecting the brain, spine, and cerebrovascular system.' },
    { name: 'Oncology', detail: 'Comprehensive cancer care involving diagnosis, targeted therapies, chemotherapy, and multidisciplinary treatment planning.' },
    { name: 'Paediatric Surgery', detail: 'Specialized surgical care for infants, children, and adolescents with congenital anomalies and acquired conditions.' },
    { 
      name: 'Plastic Surgery', 
      customContent: (
        <div className="mb-5 w-100">
          <ul className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Breast Augmentation (Enhancement)</li>
            <li>Breast Reduction</li>
            <li>Mastopexy</li>
            <li>Body Contouring</li>
            <li>Liposuction</li>
            <li>Abdominoplasty (Tummy Tuck)</li>
            <li>Rhinoplasty (Nose Job)</li>
            <li>Bleaspharoplasty</li>
            <li>Face Lift</li>
            <li>Cheek Implant</li>
            <li>Chin Implant</li>
            <li>Lip Reduction /Enhancement</li>
            <li>Botox Injection/Fillers</li>
            <li>Dermabrasion</li>
            <li>Gynecomastia - Male Breast reduction</li>
            <li>Post Mastectomy breast reconstruction</li>
            <li>Hant/Micro vascular and reconstructive surgeries</li>
          </ul>
        </div>
      )
    },
    { name: 'Cosmetic Surgery', detail: 'Aesthetic procedures aimed at enhancing physical appearance and boosting self-confidence through advanced techniques.' },
    { 
      name: 'Pulmonary Medicine', 
      customContent: (
        <div className="mb-5 w-100">
          <p className="text-muted lh-lg mb-4">
            Pulmonary Medicine department provide OPD services, counseling for allergic disease, Bronchial Asthma , COPD, Bronchogenic -carcinoma, ILD, Respiratory failures of any cause, HIV with pulmonary diseases, TB, MDR-TB for both adult and pediatrics.
          </p>
          <h5 className="fw-bold text-primary mb-3">Services offered:</h5>
          <ol className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem' }}>
            <li>PFT</li>
            <li>Bronchoscopy and Biopsy</li>
            <li>C-Pap</li>
            <li>Bi-Pap</li>
            <li>Ventilators</li>
            <li>ICD</li>
          </ol>
          <p className="text-muted lh-lg mb-0 fw-bold">
            24 hours inpatient services and ICU care.
          </p>
        </div>
      )
    },
    { 
      name: 'General & Minimal Invasive Surgery', 
      customContent: (
        <div className="mb-5 w-100">
          <p className="text-muted lh-lg mb-4">
            General & Minimal Invasive surgery department deals with all common lumps and bumps and surgeries which are now being done with small openings (keyhole)
          </p>
          <h5 className="fw-bold text-primary mb-3">The department provides specialist care in the following super specialties:</h5>
          <ol className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem' }}>
            <li>Laparoscopic Surgery</li>
            <li>Stapled Haemorrhoidectomy</li>
            <li>Pancreatic Surgery</li>
            <li>Hernia Surgery</li>
            <li>Bowel Resection</li>
            <li>Diabetic Foot Care</li>
            <li>Trauma Surgery</li>
            <li>Bariatric Surgery</li>
            <li>Breast Surgery</li>
            <li>Fistulas & fissure.</li>
            <li>Hydrocele</li>
            <li>Thyroid</li>
            <li>Appendix</li>
            <li>Gall bladder</li>
          </ol>
        </div>
      )
    }
  ];

  const activeSpec = specs[activeTab];

  return (
    <div className=" specialities-page bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">Super-Specialities</h1>
          <p className="text-muted">Advanced and highly specialized medical care for complex conditions.</p>
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

export default SuperSpecialities

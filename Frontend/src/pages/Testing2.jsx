import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaHeartbeat, FaSearch, FaCalendarCheck } from "react-icons/fa";
import "./Testing2.css";

const departments = [
  {
    id: 1,
    name: "Anaesthesiology",
    subtitle: "Pain Management & Critical Care",
    image: "https://cdn-icons-png.flaticon.com/512/2873/2873099.png",
    bg: "linear-gradient(135deg, #10b981, #047857)",
    glowColor: "#10b981",
    badgeText: "ANAESTHESIA",
    description: "Comprehensive pain management and critical care during surgical procedures, ensuring patient safety and comfort.",
  },
  {
    id: 2,
    name: "Casualty / Emergency",
    subtitle: "24/7 Rapid Response",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
    bg: "linear-gradient(135deg, #ef4444, #b91c1c)",
    glowColor: "#ef4444",
    badgeText: "EMERGENCY",
    description: "24/7 rapid response and life-saving treatments for critical injuries and sudden illnesses.",
  },
  {
    id: 3,
    name: "Dentistry",
    subtitle: "Comprehensive Dental Care",
    image: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png",
    bg: "linear-gradient(135deg, #0ea5e9, #0369a1)",
    glowColor: "#0ea5e9",
    badgeText: "DENTAL",
    description: "Complete dental care including ICU supported Maxillofacial Surgery, Implant Procedures, Facial Surgeries, Cosmetic procedures, Orthodontic and Endodontic Treatments, Periodontal Surgery, and Tooth Whitening Procedures.",
    customContent: (
      <div className="w-100">
        <h5 className="fw-bold text-primary mb-3">Treatment Available in Dental Department:</h5>
        <ul className="text-muted lh-lg mb-4" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
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
              <img src="../Image/bannerbg.jpg" alt="Tooth Whitening Before" className="img-fluid rounded mb-2" style={{ maxHeight: '150px', objectFit: 'cover', width: '100%', backgroundColor: '#f8f9fa' }} />
              <p className="text-muted fw-semibold mb-0 py-1">Before</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-5">
            <div className="card border-light shadow-sm text-center p-2">
              <img src="../Image/bannerbg.jpg" alt="Tooth Whitening After" className="img-fluid rounded mb-2" style={{ maxHeight: '150px', objectFit: 'cover', width: '100%', backgroundColor: '#f8f9fa' }} />
              <p className="text-danger fw-semibold mb-0 py-1">After</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    name: "Dermatology",
    subtitle: "Skin, Hair & Nail Care",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    bg: "linear-gradient(135deg, #f43f5e, #be123c)",
    glowColor: "#f43f5e",
    badgeText: "DERMATOLOGY",
    description: "Expert care for skin, hair, and nail disorders, including clinical and cosmetic treatments.",
  },
  {
    id: 5,
    name: "ENT",
    subtitle: "Ear, Nose & Throat Care",
    image: "https://cdn-icons-png.flaticon.com/512/3209/3209995.png",
    bg: "linear-gradient(135deg, #f59e0b, #b45309)",
    glowColor: "#f59e0b",
    badgeText: "ENT",
    description: "Dedicated to expanding the frontiers of diagnosis, treatment and research of disorders of the ear, nose and sinuses, throat and the anterior skull base. Excellence is demonstrated through sophisticated use of endoscopes and microscopes for various surgeries.",
    customContent: (
      <div className="w-100">
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
  {
    id: 6,
    name: "General Surgery",
    subtitle: "Minimally Invasive Care",
    image: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png",
    bg: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
    glowColor: "#8b5cf6",
    badgeText: "SURGERY",
    description: "Minimally invasive and comprehensive surgical solutions for a wide range of medical conditions.",
  },
  {
    id: 7,
    name: "Internal Medicine",
    subtitle: "Holistic Adult Disease Management",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    glowColor: "#3b82f6",
    badgeText: "MEDICINE",
    description: "Holistic diagnosis and management of adult diseases, providing primary and specialty care.",
  },
  {
    id: 8,
    name: "Laboratory Medicine",
    subtitle: "Diagnostic & Pathology Services",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320350.png",
    bg: "linear-gradient(135deg, #6366f1, #4338ca)",
    glowColor: "#6366f1",
    badgeText: "LABORATORY",
    description: "State-of-the-art diagnostic testing and pathology services for accurate clinical assessments.",
  },
  {
    id: 9,
    name: "Nephrology",
    subtitle: "Comprehensive Kidney Care",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
    bg: "linear-gradient(135deg, #14b8a6, #0f766e)",
    glowColor: "#14b8a6",
    badgeText: "NEPHROLOGY",
    description: "Comprehensive kidney care including all forms of Dialysis (CRPT, Plasmapheresis / SLED) and Renal Biopsies.",
    customContent: (
      <div className="w-100">
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
    id: 10,
    name: "Obstetrics & Gynecology",
    subtitle: "Women's Health & Maternity",
    image: "https://cdn-icons-png.flaticon.com/512/3050/3050047.png",
    bg: "linear-gradient(135deg, #ec4899, #be185d)",
    glowColor: "#ec4899",
    badgeText: "OBG",
    description: "Dealing with Labor and women related problems. Both Outpatient and Inpatient services are offered. Specialized in Colposcopy, Epidural Analgesia, High risk pregnancy, Infertility, Minimally Invasive Surgery, and Vaginal Hysterectomy.",
    customContent: (
      <div className="w-100">
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
  {
    id: 11,
    name: "Ophthalmology",
    subtitle: "Advanced Eye Care",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135805.png",
    bg: "linear-gradient(135deg, #06b6d4, #0369a1)",
    glowColor: "#06b6d4",
    badgeText: "OPHTHALMOLOGY",
    description: "Advanced eye care, vision correction, and surgical treatments for various optical conditions.",
  },
  {
    id: 12,
    name: "Orthopedics",
    subtitle: "Bone, Joint & Trauma Care",
    image: "https://cdn-icons-png.flaticon.com/512/4320/4320359.png",
    bg: "linear-gradient(135deg, #f97316, #c2410c)",
    glowColor: "#f97316",
    badgeText: "ORTHOPEDICS",
    description: "A contemporary well-equipped department offering 24-hour emergency services for Accidents and trauma. Specialized in Arthroscopy, Total Hip and Knee replacement, Spine Instrumentation, Sports injuries, and Pediatric deformity correction.",
    customContent: (
      <div className="w-100">
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
  {
    id: 13,
    name: "Physiotherapy",
    subtitle: "Rehabilitation & Physical Therapy",
    image: "https://cdn-icons-png.flaticon.com/512/3015/3015112.png",
    bg: "linear-gradient(135deg, #84cc16, #4d7c0f)",
    glowColor: "#84cc16",
    badgeText: "PHYSIO",
    description: "Rehabilitation and physical therapy to restore movement, relieve pain, and improve physical function.",
  },
  {
    id: 14,
    name: "Psychiatry",
    subtitle: "Mental Health & Counseling",
    image: "https://cdn-icons-png.flaticon.com/512/3050/3050012.png",
    bg: "linear-gradient(135deg, #64748b, #334155)",
    glowColor: "#64748b",
    badgeText: "PSYCHIATRY",
    description: "Providing psychiatric services to both outpatients and inpatients. Offering various psychological techniques and therapies including Psychotherapy, Marital therapy, Family therapy, Alcohol detoxification, and Electro convulsive therapy.",
    customContent: (
      <div className="w-100">
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
  {
    id: 15,
    name: "Urology",
    subtitle: "Urinary Tract & Reproductive System",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
    bg: "linear-gradient(135deg, #eab308, #a16207)",
    glowColor: "#eab308",
    badgeText: "UROLOGY",
    description: "Specialized care for urinary tract conditions and male reproductive system disorders.",
  }
];

const Testing2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(null);
  const sliderRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (selectedDept) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedDept]);

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="glass-view-wrapper" style={{ marginTop: '75px' }}>
      {selectedDept ? (
        /* Compact, Immersive Detail View Fitting Standard Viewports */
        <div className="glass-detail-container animate-scale-up">
          {/* Dynamic Blurred Background Blobs */}
          <div className="blur-blob blob-top-left" style={{ background: selectedDept.glowColor }}></div>
          <div className="blur-blob blob-bottom-right" style={{ background: selectedDept.glowColor }}></div>

          {/* Main Glassmorphic Showcase Card */}
          <div className="glass-card-box">
            {/* Absolute Sleek Back Button */}
            <button className="glass-back-btn" onClick={() => setSelectedDept(null)} title="Back to Departments">
              <FaChevronLeft className="back-icon" />

            </button>

            {/* Left Column: Info & Single-Line Thumbnail Bar */}
            <div className="glass-content-col">
              <div className="glass-brand-head">
                <div className="brand-icon-box">
                  <FaHeartbeat className="brand-logo-icon" />
                </div>


                <span className="brand-dept-tag">{selectedDept.badgeText}</span>
              </div>

              <h1 className="glass-dept-title">{selectedDept.name}</h1>
              <p className="glass-dept-subtitle ">{selectedDept.subtitle}</p>

              <div className="glass-desc-wrapper custom-scrollbar">
                {selectedDept.customContent ? (
                  <div className="glass-dept-desc">
                    {selectedDept.customContent}
                  </div>
                ) : (
                  <p className="glass-dept-desc">{selectedDept.description}</p>
                )}
              </div>
              {/* Bottom Horizontal Carousel Selector */}
              <div className="glass-thumbnail-wrapper">
                <button className="thumb-arrow-btn" onClick={() => carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })}>
                  <FaChevronLeft />
                </button>

                <div className="thumbnails-track" ref={carouselRef}>
                  {departments.map((dept) => {
                    const isActive = selectedDept.id === dept.id;
                    return isActive ? (
                      <div
                        key={dept.id}
                        className="thumb-circle-active"
                        onClick={() => setSelectedDept(dept)}
                        title={dept.name}
                        style={{ boxShadow: `0 0 20px ${dept.glowColor}90` }}
                      >
                        <img src={dept.image} alt={dept.name} />
                      </div>
                    ) : (
                      <div
                        key={dept.id}
                        className="thumb-circle-inactive"
                        onClick={() => setSelectedDept(dept)}
                        title={dept.name}
                      >
                        <img src={dept.image} alt={dept.name} />
                      </div>
                    );
                  })}
                </div>

                <button className="thumb-arrow-btn" onClick={() => carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' })}>
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Right Column: Absolutely Positioned Protruding Black Bowl matching reference */}
            <div className="glass-showcase-col">
              <div className="premium-plate-container" key={selectedDept.id}>
                <div className="black-protruding-bowl">
                  <div className="bowl-inner-depth">
                    <img
                      src={selectedDept.image}
                      alt={selectedDept.name}
                      className="bowl-spinning-hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Overview Grid */
        <div className="overview-container animate-fade">
          <div className="overview-header">
            <div>
              <h2 className="overview-title">Explore Specialties</h2>
              <p className="overview-subtitle">Select a department to view specialized doctors, treatments, and appointments.</p>
            </div>
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search department..."
                className="premium-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="cards-slider-track" ref={sliderRef}>
            {filteredDepartments.map((dept) => (
              <div
                className="premium-dept-card"
                key={dept.id}
                style={{ background: dept.bg, boxShadow: `0 20px 40px ${dept.glowColor}40` }}
                onClick={() => setSelectedDept(dept)}
              >
                <div className="card-img-pop">
                  <img src={dept.image} alt={dept.name} />
                </div>
                <div className="card-info-wrap">
                  <span className="dept-badge">{dept.badgeText}</span>
                  <h3>{dept.name}</h3>
                  <p >{dept.subtitle}</p>
                </div>
                <div className="card-hover-arrow">
                  <span>Explore</span> <FaChevronRight />
                </div>
              </div>
            ))}
            {filteredDepartments.length === 0 && (
              <div className="no-results-msg">No departments matched your search query.</div>
            )}
          </div>

          <div className="slider-controls">
            <button className="control-btn" onClick={scrollPrev}>
              <FaChevronLeft className="me-2" /> Prev
            </button>
            <button className="control-btn" onClick={scrollNext}>
              Next <FaChevronRight className="ms-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testing2;
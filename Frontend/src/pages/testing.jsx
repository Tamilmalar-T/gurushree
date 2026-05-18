import React, { useState, useRef } from "react";
import "./Testing.css";

const departments = [
  {
    id: 1,
    name: "Gastroenterology",
    subtitle: "Digestive System Care",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
    bg: "linear-gradient(135deg, #ff4d6d, #c9184a)",
    badgeText: "GASTRO",
    description: "Our 24/7 Gastroenterology service is a super-specialty dedicated to managing disorders of the digestive system and liver. Cared for by teams of physicians with broad expertise in all forms of gastroenterological and hepatobiliary diseases.",
    services: [
      { title: "Gastroscopy (OGD)", img: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png" },
      { title: "Colonoscopy", img: "https://cdn-icons-png.flaticon.com/512/3209/3209995.png" },
      { title: "ERCP Method", img: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png" },
      { title: "Capsule Endoscopy", img: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png" }
    ]
  },
  {
    id: 2,
    name: "Neuro Surgery",
    subtitle: "Brain & Spine Care",
    image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
    bg: "linear-gradient(135deg, #4361ee, #023e8a)",
    badgeText: "NEURO",
    description: "Advanced surgical interventions for complex neurological conditions affecting the brain, spine, and cerebrovascular system. Utilizing cutting-edge technology and minimally invasive surgical techniques.",
    services: [
      { title: "Trauma Care", img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png" },
      { title: "Spinal Surgeries", img: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png" },
      { title: "Cerebrovascular", img: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png" }
    ]
  },
  {
    id: 3,
    name: "Plastic Surgery",
    subtitle: "Cosmetic & Reconstruction",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    bg: "linear-gradient(135deg, #52b788, #1b4332)",
    badgeText: "PLASTIC",
    description: "State-of-the-art cosmetic and reconstructive procedures aimed at restoring form and function, enhancing physical appearance, and boosting self-confidence through advanced micro-vascular techniques.",
    services: [
      { title: "Breast Surgeries", img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png" },
      { title: "Liposuction", img: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png" },
      { title: "Rhinoplasty", img: "https://cdn-icons-png.flaticon.com/512/3209/3209995.png" },
      { title: "Micro-vascular", img: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png" }
    ]
  },
  {
    id: 4,
    name: "Oral & Maxillofacial",
    subtitle: "Facial & Dental Surgery",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
    bg: "linear-gradient(135deg, #6c63ff, #3a0ca3)",
    badgeText: "MAXILLO",
    description: "Expert diagnosis and surgical management of diseases, injuries, and defects of the human mouth, jaw, and facial structures. Duly equipped with dedicated ICU support for complex maxillofacial trauma.",
    services: [
      { title: "Fracture Reduction", img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
      { title: "Tumor Removal", img: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png" },
      { title: "Dental Implants", img: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png" },
      { title: "Oral Cancer Protocol", img: "https://cdn-icons-png.flaticon.com/512/3209/3209995.png" }
    ]
  },
  {
    id: 5,
    name: "Dentistry",
    subtitle: "Comprehensive Dental Care",
    image: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png",
    bg: "linear-gradient(135deg, #00b4d8, #0077b6)",
    badgeText: "DENTAL",
    description: "Complete dental care with hi-tech dental facilities capable of handling complex procedures ranging from routine fillings to advanced cosmetic dentistry and maxillofacial implants.",
    services: [
      { title: "Cosmetic Dentistry", img: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png" },
      { title: "Orthodontic Care", img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
      { title: "Periodontal Surgery", img: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png" },
      { title: "Prosthodontics", img: "https://cdn-icons-png.flaticon.com/512/3209/3209995.png" }
    ]
  },
  {
    id: 6,
    name: "ENT Specialist",
    subtitle: "Ear, Nose & Throat Care",
    image: "https://cdn-icons-png.flaticon.com/512/3209/3209995.png",
    bg: "linear-gradient(135deg, #ffb703, #fb8500)",
    badgeText: "ENT",
    description: "Dedicated to expanding the frontiers of diagnosis, treatment, and research of disorders of the ear, nose, sinuses, throat, and anterior skull base using sophisticated flexible and rigid video endoscopy.",
    services: [
      { title: "Sinus Surgery (FESS)", img: "https://cdn-icons-png.flaticon.com/512/3209/3209995.png" },
      { title: "Micro Ear Surgeries", img: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png" },
      { title: "Voice Disorders", img: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png" },
      { title: "Septorhinoplasty", img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" }
    ]
  },
  {
    id: 7,
    name: "General Surgery",
    subtitle: "Minimally Invasive Care",
    image: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png",
    bg: "linear-gradient(135deg, #9b5de5, #7100a5)",
    badgeText: "SURGERY",
    description: "Providing specialist surgical care for all common lumps, hernias, and abdominal disorders, prioritizing advanced minimally invasive keyhole (laparoscopic) techniques for faster recovery.",
    services: [
      { title: "Laparoscopic Keyhole", img: "https://cdn-icons-png.flaticon.com/512/2765/2765890.png" },
      { title: "Hernia Repair", img: "https://cdn-icons-png.flaticon.com/512/3209/3209995.png" },
      { title: "Bowel Resection", img: "https://cdn-icons-png.flaticon.com/512/2823/2823525.png" },
      { title: "Trauma Surgery", img: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png" }
    ]
  }
];

const Testing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(null);
  const sliderRef = useRef(null);

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  return (
    <div className="testing-wrapper" style={{ marginTop: '70px' }}>
      <div className="testing-container">
        {selectedDept ? (
          /* Inner Detail View Matching Screenshot */
          <div className="image-detail-view animate-fade">
            <div className="close-bar">
              <button className="close-btn" onClick={() => setSelectedDept(null)}>✕ Close</button>
            </div>

            <div className="image-detail-body">
              {/* Left Sidebar Navigation */}
              <div className="detail-sidebar">
                <button className="back-arrow-btn" onClick={() => setSelectedDept(null)} title="Back to Overview">❮</button>
                <div className="vertical-nav-list">
                  {departments.map(d => (
                    <img
                      key={d.id}
                      src={d.image}
                      alt={d.name}
                      title={d.name}
                      className={`sidebar-dept-icon ${selectedDept.id === d.id ? 'active' : ''}`}
                      onClick={() => setSelectedDept(d)}
                    />
                  ))}
                </div>
              </div>

              {/* Main Showcase Box */}
              <div className="main-showcase-card" style={{ background: selectedDept.bg }}>
                <div className="showcase-left-arch">
                  <div className="arch-bg"></div>
                  <img src={selectedDept.image} alt={selectedDept.name} className="showcase-huge-img" />
                </div>

                <div className="showcase-right-info">
                  <div className="info-head">
                    <div>
                      <h1 className="showcase-title">{selectedDept.name}</h1>
                      <p className="showcase-subtitle">Department: {selectedDept.subtitle}</p>
                    </div>
                    <div className="badge-logo">{selectedDept.badgeText}</div>
                  </div>

                  <p className="showcase-desc">{selectedDept.description}</p>

                  <div className="clips-section">
                    <h4 className="clips-heading">Key Services / Procedures</h4>
                    <div className="clips-row">
                      {selectedDept.services.map((svc, i) => (
                        <div key={i} className="clip-card">
                          <img src={svc.img} alt={svc.title} className="clip-img" />
                          <div className="clip-title">{svc.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Cards View */
          <>
            <div className="top-bar">
              <h2 className="logo">Gurushree Departments</h2>
              <input
                type="text"
                placeholder="Search department..."
                className="search-box"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="menu-btn">☰</button>
            </div>

            <div className="card-slider" ref={sliderRef}>
              {filteredDepartments.map((item) => (
                <div
                  className="department-card"
                  key={item.id}
                  style={{ background: item.bg }}
                  onClick={() => setSelectedDept(item)}
                >
                  <img src={item.image} alt={item.name} />
                  <div className="card-content">
                    <h3>{item.name}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
              {filteredDepartments.length === 0 && (
                <div className="no-results">No matching departments found.</div>
              )}
            </div>

            <div className="bottom-nav">
              <button onClick={scrollPrev}>❮ Prev</button>
              <button onClick={scrollNext}>Next ❯</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Testing;
import React from 'react'
import './css/Facilities.css'

const Facilities = () => {
  const facilities = [
    { title: '24/7 Emergency', desc: 'Ready for any critical situation round the clock.', icon: '🚑' },
    { title: 'Advanced ICU', desc: 'Specialized intensive care unit with modern monitoring.', icon: '🏥' },
    { title: 'Modern OT', desc: 'Sterile and high-tech operation theaters.', icon: '🔪' },
    { title: 'Diagnostics', desc: 'Fully automated lab and radiology department.', icon: '🧬' },
    { title: 'Patient Rooms', desc: 'Private and semi-private comfortable patient suites.', icon: '🛏️' },
    { title: 'Ambulance', desc: 'Well-equipped mobile medical units.', icon: '🚐' }
  ]

  return (
    <div className="py-5 bg-light facilities-page">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our World-Class Facilities</h1>
          <p className="text-muted">We offer the best-in-class infrastructure for your recovery.</p>
        </div>
        <div className="row g-4">
          {facilities.map((f, i) => (
            <div key={i} className="col-md-4">
              <div className="card border-0 shadow-sm p-4 h-100 rounded-4 text-center facility-card">
                <div className="facility-icon">{f.icon}</div>
                <h5 className="fw-bold">{f.title}</h5>
                <p className="text-muted small mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Facilities

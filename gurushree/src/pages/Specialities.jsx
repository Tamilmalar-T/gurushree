import React from 'react'
import './css/Specialities.css'

const Specialities = () => {
  const specs = [
    { name: 'Cardiology', detail: 'Heart health and surgery expert care.', icon: '❤️' },
    { name: 'Neurology', detail: 'Brain and nervous system specialists.', icon: '🧠' },
    { name: 'Orthopedics', detail: 'Bone, joint, and spine treatments.', icon: '🦴' },
    { name: 'Pediatrics', detail: 'Dedicated care for your children.', icon: '👶' },
    { name: 'Gynaecology', detail: 'Women health and maternity services.', icon: '🤰' },
    { name: 'Dermatology', detail: 'Skin, hair, and nail health expert.', icon: '✨' }
  ]

  return (
    <div className="py-5 specialities-page">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Medical Specialities</h1>
          <p className="text-muted">Expert doctors in diverse fields of medicine.</p>
        </div>
        <div className="row g-4">
          {specs.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className="d-flex align-items-start p-4 rounded-4 shadow-sm h-100 speciality-item">
                <div className="fs-2 me-4 speciality-icon">{s.icon}</div>
                <div>
                  <h5 className="fw-bold mb-2">{s.name}</h5>
                  <p className="text-muted small mb-0">{s.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Specialities

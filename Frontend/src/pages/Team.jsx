import React from 'react';
import './css/Team.css';

const Team = () => {
  const departments = [
    { name: 'Anesthesiology', doctors: ['Dr. S.B. Gangadhar', 'Dr. Manjunath Sarangi'] },
    { name: 'Cosmetic Surgery', doctors: ['Dr. Ramesh babu'] },
    { name: 'Dental Surgery', doctors: ['Dr. Sugandh'] },
    { name: 'Dermatology', doctors: ['Dr. Arathi', 'Dr. Shettykere', 'Dr. Srinivas'] },
    { name: 'ENT', doctors: ['Dr. Hemraj'] },
    { name: 'Gastroenterology', doctors: ['Dr. Ashwin Kumar'] },
    { name: 'General Surgery', doctors: ['Dr. Giridhar', 'Dr. Rudresh'] },
    { name: 'Intensive Medicine', doctors: [
      'Dr. Harish', 'Dr. Sridhar', 'Dr. Anasuya', 'Dr. Vijayalakshmi', 'Dr. Poonam', 
      'Dr. Sridhar J', 'Dr. Raveesha', 'Dr. Manoj', 'Dr. Ravendra BK', 'Dr. Bagat Ram', 
      'Dr. Vishwanath', 'Dr. Pradeep', 'Dr. Naveen Gowda', 'Dr. Madhusudhan', 
      'Dr. Lakshmish', 'Dr. Anand', 'Dr. Vinay'
    ] },
    { name: 'Internal Medicine', doctors: ['Dr. Shankarlingaiah', 'Dr. Niroop'] },
    { name: 'Laboratory Medicine', doctors: ['Dr. Padmanna Negli'] },
    { name: 'Maxillo-Facial Surgery', doctors: ['Dr. Anuradha', 'Dr. Deepak'] },
    { name: 'Neonatology', doctors: ['Dr. Sunil', 'Dr. Sowmini', 'Dr. Rudramurthy'] },
    { name: 'Nephrology', doctors: ['Dr. Shivaprasad', 'Dr. Ashish'] },
    { name: 'Neuro Surgery', doctors: ['Dr. Amresh'] },
    { name: 'Neurology', doctors: ['Dr. Dayanand'] },
    { name: 'Obstetric/Gynecology', doctors: [
      'Dr. Chaya', 'Dr. Vijayalakshmi', 'Dr. Susheelamma', 'Dr. Nethra Dinesh', 
      'Dr. Sunanda', 'Dr. Anitha'
    ] },
    { name: 'Oncology', doctors: ['Dr. Lokanath'] },
    { name: 'Opthamology', doctors: ['Dr. Nagabhushan', 'Dr. Suresh'] },
    { name: 'Orthopaedics', doctors: ['Dr. Manjunath B', 'Dr. Janardhan S'] },
    { name: 'Paediatric Surgery', doctors: ['Dr. Ravi Kiran K', 'Dr. Somashekariah'] },
    { name: 'Physiotherapy', doctors: ['Dr. Praveen'] },
    { name: 'Plastic Surgery', doctors: ['Dr. Ramesh Babu'] },
    { name: 'Psychiatry', doctors: ['Dr. Madhukar', 'Dr. Prasanth'] },
    { name: 'Pulmonary Medicine', doctors: ['Dr. Saroja B.G'] },
    { name: 'Radiology', doctors: ['Dr. Vedraj'] },
    { name: 'Urology', doctors: ['Dr. Chandrashekar', 'Dr. Nagarajaiah'] }
  ];

  return (
    <div className="team-page bg-light pb-5">
      <div className="container py-5" style={{ marginTop: '100px' }}>
        
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary display-5 mb-4">Our Medical Team</h1>
          
          <div className="team-intro mx-auto text-muted lh-lg mb-5 text-start" style={{ maxWidth: '900px' }}>
            <p>
              <strong>Gurushree is a well known Trauma centre.</strong> The reason behind the success is our team of Doctors. We have a team of 25 well qualified intensivists who work round the clock enabling us to take up any kind of Trauma cases. The 10 beded ICU setup with top of the line GE ventilators supporting each bed helps us achieve quick & safe recovery.
            </p>
            <p>
              The hi-tech facility enables us to perform any kind of surgery ranging from Neurology to Plastic surgery to Orthopaedics.
            </p>
            <p>
              Gurushree boasts a line of top well qualified consultants in the fields of Neuro surgery, Neurology, Orthopaedics, Surgery and Plastic surgery, who work closely as a team. Above all, every case is closely monitored and the progress is studied by the Medical Director <strong>Dr. S.B. Gangadhar</strong> himself who has a great amount of interest in Trauma cases.
            </p>
          </div>
        </div>

        {departments.map((dept, index) => (
          <div key={index} className="department-section mb-5 bg-white p-4 rounded-4 shadow-sm border border-light">
            <h3 className="fw-bold mb-4">{dept.name}</h3>
            <div className="row g-4">
              {dept.doctors.map((doctor, docIndex) => {
                // Generate a consistent placeholder color based on the doctor's name
                const colors = ['00a3c8', '005b70', '10b981', '2563eb', '7c3aed'];
                const colorIndex = doctor.length % colors.length;
                const bgColor = colors[colorIndex];
                
                return (
                  <div key={docIndex} className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card doctor-card border-0 h-100 text-center p-3">
                      <div className="doctor-img-container mx-auto mb-3 rounded-circle overflow-hidden shadow-sm border border-3 border-white" style={{ width: '120px', height: '120px' }}>
                        {/* Image Option: You can replace the src below with real image paths (e.g., '../assets/doctors/dr-gangadhar.jpg') */}
                        <img 
                          src={`../assets/doctors/${doctor.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`} 
                          alt={doctor} 
                          className="img-fluid w-100 h-100 object-fit-cover" 
                          onError={(e) => { 
                            // Fallback to auto-generated initials image if real image doesn't exist yet
                            e.target.onerror = null; 
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.replace('Dr. ', ''))}&background=${bgColor}&color=fff&size=120&bold=true`;
                          }} 
                        />
                      </div>
                      <h5 className="card-title fw-bold text-dark mb-1" style={{ fontSize: '1.1rem' }}>{doctor}</h5>
                      <p className="card-text text-muted small fw-medium mb-0">{dept.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

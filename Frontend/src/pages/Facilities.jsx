import React from 'react';
import './css/Facilities.css';
import { FaFilePdf, FaArrowRight } from 'react-icons/fa';

const Facilities = () => {
  const facilitiesList = [
    {
      title: 'Health Packages',
      desc: 'Good Health is a priceless asset! To assist you in taking care and strengthening of this precious asset, Gurushree offers you a complete range of preventive and health maintenance programs, which helps to achieve "Good Health" and increases productive life years. Preventive & Health Maintenance programs are specially designed to provide you wellness and good health.',
      customContent: (
        <div className="package-list mt-4">
          <div className="package-item py-3 border-bottom">
            <div className="d-flex align-items-center mb-2">
              <FaArrowRight className="text-warning me-2" />
              <h6 className="mb-0 text-primary fw-bold">Master Health Check-up</h6>
            </div>
            <a href="#" className="text-decoration-none text-secondary d-inline-flex align-items-center download-link ms-4">
              Download PDF <FaFilePdf className="ms-2 text-danger" />
            </a>
          </div>

          <div className="package-item py-3 border-bottom">
            <div className="d-flex align-items-center mb-2">
              <FaArrowRight className="text-warning me-2" />
              <h6 className="mb-0 text-primary fw-bold">Executive Health Check-up</h6>
            </div>
            <a href="#" className="text-decoration-none text-secondary d-inline-flex align-items-center download-link ms-4">
              Download PDF <FaFilePdf className="ms-2 text-danger" />
            </a>
          </div>

          <div className="package-item py-3 border-bottom">
            <div className="d-flex align-items-center mb-2">
              <FaArrowRight className="text-warning me-2" />
              <h6 className="mb-0 text-primary fw-bold">Comprehensive Health Check-up</h6>
            </div>
            <a href="#" className="text-decoration-none text-secondary d-inline-flex align-items-center download-link ms-4">
              Download PDF <FaFilePdf className="ms-2 text-danger" />
            </a>
          </div>
        </div>
      )
    },
    {
      title: 'Emergency Trauma & Critical Care',
      desc: 'Committed quality care for critically ill with round the clock emergency services by professionally trained staff.',
      bgClass: 'bg-trauma'
    },
    {
      title: 'ICU on Wheels',
      desc: 'True critical care ambulance equipped with international standard ventilator, multi-para monitor, portable defibrillator.',
      bgClass: 'bg-ambulance'
    },
    {
      title: 'ICU Facilities',
      desc: 'DATEX-OHEMDA-GE high end dedicated ventilator equipped state of the art ICU bed (12 nos.) duly supported by professionally trained para-medical staff deployed to each bed, monitored by experienced intensivists.',
      bgClass: 'bg-icu'
    },
    {
      title: 'Physiotherapy',
      desc: 'Experienced physiotherapists with adequate facilities will supplement Physiotherapy which acts as a back bone for a true Trauma and critical care center.',
      bgClass: 'bg-physio'
    },
    {
      title: 'Maternal & Foetal Care',
      desc: 'International standard labour ward capable of handling more than one labour at a time.',
      bgClass: 'bg-maternal'
    },
    {
      title: 'NICU',
      desc: 'Six bedded NICU equipped with the ultimate Neonatal care by 3 GE-GIRAFFEs along with high end dedicated Neonatal ventilators, BILLY BLANKET, monitored round the clock by Neonatalogists. Transport Incubator facility also available.',
      bgClass: 'bg-nicu'
    },
    {
      title: 'Operation Theater Complex',
      desc: 'Two major operation theaters that are built to international standards (13feet high ceiling, top to bottom granite cladding etc). Equipped with top end operation tables, operating microscope, operating laproscope, arthroscope, C-Arm, Anaesthesia workstation (AESTIVA-AESPIRE-GE) ready to accept any type of surgery.',
      bgClass: 'bg-ot'
    },
    {
      title: 'Anaesthesia Work Station',
      desc: 'DATEX-OHEMDA-GE Anaesthesia work station "Aisys"',
      bgClass: 'bg-anaesthesia'
    },
    {
      title: 'DIALYSIS',
      desc: 'A round the clock 5 bedded dialysis unit houses top end dialysers, duly monitored by a team of skilled professionals able to attend any type of Nephrological cases.',
      bgClass: 'bg-dialysis'
    },
    {
      title: 'Clinical Analysis',
      desc: 'Hi-Tech laboratory facility with experienced staff assures TRUE accurate and quick results to the patients since equipped with fully automatic analyzer, semi-automatic analyzer, electrolyte analyzer, blood gas analyzer, coagulation, ESR, urine analyzer - HUMAN (German make).',
      bgClass: 'bg-clinical'
    },
    {
      title: 'Diagnostic Imaging',
      desc: 'Siemens brand 300 MN multiphos high end X-ray machine supported by a portable X-ray unit provides a complete Trauma and Critical care.',
      bgClass: 'bg-diagnostic'
    },
    {
      title: 'Ultra sound scanning, Echo & Doppler',
      desc: 'Top-end Siemens diagnostic equipment has all diagnostic assessments in one machine.',
      bgClass: 'bg-ultrasound'
    },
    {
      title: 'Dental Care',
      desc: 'Complete dental care with hi-tech dental facilities capable of handling maxillo facial surgery to implants.',
      bgClass: 'bg-dental'
    },
    {
      title: 'Wards',
      desc: '20 years of professional and ethical medical service experience of the founder is instrumental in organising range of spacious well ventilated wards (with attached shower area) to suit one and all',
      bgClass: 'bg-wards'
    }
  ];

  return (
    <div className="facilities-page">
      <div className="container py-5">
        <div className="row g-5">
          {/* Main Column: Our Facilities */}
          <div className="col-lg-12">
            <div className="section-header mb-4">
              <h2 className="fw-bold text-primary border-bottom pb-2 border-primary border-3 d-inline-block">Our Facilities</h2>
              <p className="text-secondary fw-semibold mt-2">Gurushree Hi-Tech Multi-Speciality Hospital offers -</p>
            </div> 

            {facilitiesList.map((facility, index) => (
              <div key={index} className="facility-item bg-white rounded-4 shadow-sm overflow-hidden mb-4 border border-light">
                <h4 className="facility-title text-white p-3 mb-0 fw-bold">{facility.title}</h4>
                <div className={`d-flex flex-column ${index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'}`}>
                  <div className="p-4 flex-grow-1 d-flex align-items-center">
                    <p className="text-muted lh-lg mb-0 w-100">
                      {facility.desc}
                    </p>
                  </div>
                  {(facility.customContent || facility.bgClass) && (
                    <div className="facility-img-wrapper flex-shrink-0" style={{ width: '100%', maxWidth: '350px' }}>
                      {facility.customContent ? (
                        <div className="w-100 h-100 d-flex flex-column justify-content-center p-3 bg-light">
                          {facility.customContent}
                        </div>
                      ) : (
                        <div className={`facility-img ${facility.bgClass} w-100 h-100`}></div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

         {/* <div className="col-lg-4">
            <div className="health-packages-card rounded-4 shadow-sm p-4 h-100 position-sticky" style={{ top: '120px' }}>
              <h3 className="text-warning fw-bold mb-3 d-inline-block border-bottom border-warning border-3 pb-2">Health Packages</h3>
              <p className="text-muted lh-lg mb-4 text-justify">
                Good Health is a priceless asset! To assist you in taking care and strengthening of this precious asset, Gurushree offers you a complete range of preventive and health maintenance programs, which helps to achieve "Good Health" and increases productive life years. Preventive & Health Maintenance programs are specially designed to provide you wellness and good health.
              </p>

              <div className="package-list mt-4">
                <div className="package-item py-3 border-bottom">
                  <div className="d-flex align-items-center mb-2">
                    <FaArrowRight className="text-warning me-2" />
                    <h6 className="mb-0 text-primary fw-bold">Master Health Check-up</h6>
                  </div>
                  <a href="#" className="text-decoration-none text-secondary d-inline-flex align-items-center download-link ms-4">
                    Download PDF <FaFilePdf className="ms-2 text-danger" />
                  </a>
                </div>

                <div className="package-item py-3 border-bottom">
                  <div className="d-flex align-items-center mb-2">
                    <FaArrowRight className="text-warning me-2" />
                    <h6 className="mb-0 text-primary fw-bold">Executive Health Check-up</h6>
                  </div>
                  <a href="#" className="text-decoration-none text-secondary d-inline-flex align-items-center download-link ms-4">
                    Download PDF <FaFilePdf className="ms-2 text-danger" />
                  </a>
                </div>

                <div className="package-item py-3 border-bottom">
                  <div className="d-flex align-items-center mb-2">
                    <FaArrowRight className="text-warning me-2" />
                    <h6 className="mb-0 text-primary fw-bold">Comprehensive Health Check-up</h6>
                  </div>
                  <a href="#" className="text-decoration-none text-secondary d-inline-flex align-items-center download-link ms-4">
                    Download PDF <FaFilePdf className="ms-2 text-danger" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Facilities;

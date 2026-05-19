import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaHeartbeat, 
  FaSearch, 
  FaClock, 
  FaPhoneAlt, 
  FaRegEnvelope, 
  FaUserMd, 
  FaCalendarAlt, 
  FaArrowRight,
  FaStethoscope, 
  FaBrain, 
  FaSyringe, 
  FaTooth, 
  FaEye, 
  FaBone, 
  FaLungs, 
  FaHandHoldingMedical,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaCheckCircle,
  FaShieldAlt,
  FaAward
} from "react-icons/fa";
import "./Template3.css";

const departments = [
  {
    id: 1,
    name: "Anaesthesiology",
    subtitle: "Pain Management & Critical Care",
    icon: <FaHandHoldingMedical />,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive pain management and critical care during complex surgical procedures, ensuring maximal patient safety, comfort and smooth recovery.",
    highlights: ["Advanced Patient Safety Protocols", "24/7 ICU & Critical Care Coverage", "Multi-disciplinary Pain Management Clinics"],
    treatments: [
      {
        title: "General Anaesthesia",
        desc: "Safe and fully monitored unconsciousness for major open and minimally invasive surgical interventions.",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Regional & Epidural Blocks",
        desc: "Targeted blocks for complete pain relief during labor maternity care, orthopedic and limb surgeries.",
        img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Chronic Pain Therapies",
        desc: "Comprehensive therapeutic pathways for clinical arthritis, nerve pain, and severe back pains.",
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 2,
    name: "Casualty & Emergency",
    subtitle: "24/7 Rapid Response",
    icon: <FaSyringe />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    description: "24/7 rapid response and life-saving treatments for critical injuries, road accidents, and sudden acute medical crises.",
    highlights: ["24-Hour Trauma Response Protocols", "Fully Equipped Resuscitation Bays", "Immediate ICU-backed Care Access"],
    treatments: [
      {
        title: "24/7 Complex Trauma Care",
        desc: "Immediate advanced surgical response for multi-fracture accidents, severe shock and acute bleeding.",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Cardiac Emergency Clinic",
        desc: "Thrombolytic therapy and rapid response for acute coronary syndrome, chest pain and cardiac arrests.",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Advanced ICU Resuscitation",
        desc: "Immediate mechanical ventilation, intubation and invasive monitoring for respiratory failure.",
        img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 3,
    name: "Dentistry",
    subtitle: "Comprehensive Dental Care",
    icon: <FaTooth />,
    // image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    description: "Complete dental care including ICU-supported Maxillofacial Surgery, Implant Procedures, Facial Surgeries, Cosmetic procedures, Orthodontic and Endodontic Treatments.",
    highlights: ["ICU Supported Oral & Jaw Surgery", "Fully Specialized Implant Clinic", "High-Aesthetic Smile Correction"],
    treatments: [
      {
        title: "Maxillofacial Surgery",
        desc: "Complex jaw reconstruction, bone grafting, and fracture fixations backed by our multi-specialty ICU.",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Biomimetic Dental Implants",
        desc: "Durable, high-biocompatibility implants with natural look and maximal functional bite strength.",
        img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Laser Smile Whitening",
        desc: "Advanced non-invasive cosmetic tooth whitening and custom laminates for instant smile corrections.",
        img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 4,
    name: "Dermatology",
    subtitle: "Skin, Hair & Nail Care",
    icon: <FaRegEnvelope />,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    description: "Expert care for skin, hair, and nail disorders, including clinical and aesthetic dermatology treatments.",
    highlights: ["Advanced Laser Acne Therapies", "Dermato-oncology Skin Checks", "Specialized Trichology Hair Clinics"],
    treatments: [
      {
        title: "Acne & Skin Care Clinics",
        desc: "Individualized treatment courses for chronic acne, eczema, rosacea and psoriasis.",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Laser Resurfacing & Scars",
        desc: "Advanced laser treatments to minimize hyperpigmentation, severe surgical scars, and stretch marks.",
        img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Hair Loss & Trichology",
        desc: "Specialized diagnostics and localized therapies for hair thinning, alopecia, and chronic scalp problems.",
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 5,
    name: "ENT Department",
    subtitle: "Ear, Nose & Throat Care",
    icon: <FaStethoscope />,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
    description: "Dedicated to expanding the frontiers of diagnosis, treatment, and research of ear, nose, throat and sinus disorders.",
    highlights: ["Endoscopic Sinus Surgery (FESS)", "Microscopic Laryngeal Diagnostics", "Comprehensive Pediatric ENT Care"],
    treatments: [
      {
        title: "Endoscopic Sinus Surgery",
        desc: "Functional endoscopic surgeries (FESS) to resolve chronic sinusitis and nasal polyps.",
        img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Microscopic Ear Surgery",
        desc: "Tympanoplasty and specialized hearing enhancement procedures utilizing high-end binocular microscopes.",
        img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Vocal Cord & Voice Care",
        desc: "Microlaryngeal procedures and thyroplasties to treat vocal cord lesions and restore speaking clarity.",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 6,
    name: "General Surgery",
    subtitle: "Minimally Invasive Care",
    icon: <FaLungs />,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    description: "Minimally invasive and comprehensive surgical solutions for hernia, appendix, and other general conditions.",
    highlights: ["High-Definition Keyhole Surgery", "Rapid Recovery Ward Care", "24/7 On-Call Emergency Surgeons"],
    treatments: [
      {
        title: "Laparoscopic Hernia Fix",
        desc: "Keyhole surgery to repair abdominal and inguinal hernias with fast recovery and minimum pain.",
        img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "High-Speed Appendectomy",
        desc: "Urgent minimally invasive surgical excision for acute appendicitis to prevent rupture.",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Benign Tumor Excision",
        desc: "Day-care surgical procedures to safely excise lipomas, sebaceous cysts, and benign skin lesions.",
        img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 7,
    name: "Internal Medicine",
    subtitle: "Holistic Adult Disease Management",
    icon: <FaStethoscope />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    description: "Holistic diagnosis and management of adult diseases, providing primary and multi-specialty care for systemic illnesses.",
    highlights: ["Integrated Hypertension Management", "Elderly Multi-System Healthcare", "Lifestyle & Diabetes Optimization"],
    treatments: [
      {
        title: "Chronic Blood Pressure Care",
        desc: "Specialized clinical diagnosis and management pathways for hypertension and vascular safety.",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Geriatric Welfare Clinic",
        desc: "Thorough multi-system checks and custom pharmacological balancing for elderly medical conditions.",
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Metabolic Control Programs",
        desc: "Integrated therapeutic support for clinical diabetes, thyroid disorders, and lipid imbalances.",
        img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 8,
    name: "Laboratory Medicine",
    icon: <FaSyringe />,
    subtitle: "Diagnostic & Pathology Services",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    description: "State-of-the-art diagnostic testing and clinical pathology services for highly accurate and timely evaluations.",
    highlights: ["NABL Compliant Quality Lab", "Rapid Report Turnaround Times", "Advanced Immunohistochemistry capabilities"],
    treatments: [
      {
        title: "Advanced Hematology Panels",
        desc: "Complete blood screening, coagulation assays, and bone marrow biopsy interpretations.",
        img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Hormonal & Thyroid Assays",
        desc: "High-precision endocrinology profiles and automated diabetes diagnostic indices (HbA1c).",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Onco-Pathology Biopsies",
        desc: "Expert histopathology screening to establish early stage tumor and tissue diagnostics.",
        img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 9,
    name: "Nephrology",
    subtitle: "Comprehensive Kidney Care",
    icon: <FaHandHoldingMedical />,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive kidney care including all forms of Dialysis (CRRT, Plasmapheresis / SLED) and ultrasound-guided Renal Biopsies.",
    highlights: ["Sustained Low-Efficiency Dialysis (SLED)", "Continuous Renal Replacement (CRRT)", "Ultrasound-Guided Renal Biopsies"],
    treatments: [
      {
        title: "Sustained SLED Dialysis",
        desc: "Advanced fluid and metabolic clearance for critically ill patients under ICU parameters.",
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Percutaneous Renal Biopsy",
        desc: "Ultrasound-guided tissue extraction to accurately diagnose and classify glomerular nephritis.",
        img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Diabetic Nephropathy management",
        desc: "Specialized clinical pathways to slow the progression of kidney wear in diabetic patients.",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 10,
    name: "Obstetrics & Gynecology",
    subtitle: "Women's Health & Maternity",
    icon: <FaHeartbeat />,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    description: "Dealing with labor, maternity, and women-related health concerns. Painless labor and cozy Birthing Suite facilities are available.",
    highlights: ["Fully Configured Birthing Suites", "Painless Labor (Epidural block)", "High-Risk Pregnancy Intensive Care"],
    treatments: [
      {
        title: "Cozy Birthing Suites",
        desc: "Premium labor rooms configured for painless delivery and family comfort.",
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "High-Risk Maternal Monitoring",
        desc: "Specialized continuous monitoring for fetal safety and managing pregnancy-induced hypertension.",
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Laparoscopic Gyne Surgery",
        desc: "Minimally invasive keyhole procedures for ovarian cyst extraction, ectopic pregnancy and fibroids.",
        img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 11,
    name: "Ophthalmology",
    subtitle: "Advanced Eye Care",
    icon: <FaEye />,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    description: "Advanced eye care, vision correction, and micro-surgical treatments for various optical and retinal conditions.",
    highlights: ["Premium Cataract (IOL) Surgery", "Diabetic Retinal Laser Treatment", "Squint & Pediatric Eye Clinics"],
    treatments: [
      {
        title: "Phacoemulsification Cataract Surgery",
        desc: "Micro-incision sutureless cataract removal with premium intraocular lens (IOL) implantations.",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Diabetic Retinopathy Care",
        desc: "High-speed digital retinal scanning, angiography and therapeutic laser photocoagulation.",
        img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Squint & Orthoptics Therapy",
        desc: "Evaluation and specialized surgical solutions for child strabismus (squint) and lazy eye therapy.",
        img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 12,
    name: "Orthopedics",
    subtitle: "Bone, Joint & Trauma Care",
    icon: <FaBone />,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description: "A contemporary well-equipped department offering 24-hour emergency services for accidents and complex orthopaedic trauma.",
    highlights: ["Total Hip & Knee replacement", "Advanced Spine Instrumentation", "Minimally Invasive Fracture fixations"],
    treatments: [
      {
        title: "Joint Arthroplasty Clinic",
        desc: "Primary and revision total knee and hip replacements utilizing premium, wear-resistant artificial joints.",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Advanced Spine Stabilization",
        desc: "Spinal decompression, fusion surgeries, spine instrumentation and vertebroplasty.",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Arthroscopy & Sports Injury",
        desc: "Minimally invasive keyhole surgical repairs of ACL, meniscal tears and complex shoulder instabilities.",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 13,
    name: "Physiotherapy",
    subtitle: "Rehabilitation & Physical Therapy",
    icon: <FaHandHoldingMedical />,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "Expert physical therapy and rehabilitation strategies to restore motor movement, relieve pain, and improve musculoskeletal functions.",
    highlights: ["Post-Surgical Joint Rehabilitation", "Neuro-Motor Stroke Retraining", "Advanced Ultrasound Pain Therapies"],
    treatments: [
      {
        title: "Post-Surgical Rehab",
        desc: "Specialized joint movement training post-knee/hip replacements to quickly restore mobility.",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Stroke & Neuro Recovery",
        desc: "Motor learning pathways and custom daily-life coordination therapies for stroke survivors.",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Sports Physical Conditioning",
        desc: "Muscle strengthening, localized therapeutic ultrasound and dynamic kinesio taping.",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 14,
    name: "Psychiatry",
    subtitle: "Mental Health & Counseling",
    icon: <FaBrain />,
    image: "https://images.unsplash.com/photo-1527137341206-1a0bd81a958b?auto=format&fit=crop&w=800&q=80",
    description: "Providing mental health services and counseling. Specialized in clinical psychotherapy, family therapy and alcohol detoxification.",
    highlights: ["Individual Cognitive Behavioral Therapy", "Marital & Family Councelling Clinics", "Safe Inpatient Detoxification programs"],
    treatments: [
      {
        title: "CBT & Psychological Therapy",
        desc: "Evidence-backed cognitive therapy for clinical depression, chronic anxiety and PTSD disorders.",
        img: "https://images.unsplash.com/photo-1527137341206-1a0bd81a958b?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Clinical Substance Detox",
        desc: "Highly safe and medically supervised protocols to treat chronic alcohol and substance withdrawals.",
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Marital & Family Councelling",
        desc: "Dynamic therapy groups designed to settle parent-child adaptations and marital friction.",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  {
    id: 15,
    name: "Urology",
    subtitle: "Urinary Tract & Reproductive",
    icon: <FaRegEnvelope />,
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80",
    description: "Specialized care for urinary tract conditions, kidney stones, bladder disorders, and male reproductive system concerns.",
    highlights: ["Laser Kidney Stone Removal", "Advanced Prostate Endoscopy", "Bladder Incontinence Rehab Clinic"],
    treatments: [
      {
        title: "Laser Lithotripsy for Kidney Stones",
        desc: "Minimally invasive holmium laser therapy to break and extract urinary tract stones.",
        img: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Endoscopic Prostatectomy (TURP)",
        desc: "Safe endoscopic procedures to resolve bladder outlet obstruction caused by enlarged prostate.",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
      },
      {
        title: "Urinary Bladder Rehabilitation",
        desc: "Advanced diagnosis and pelvic floor rehabilitation programs for neurogenic bladder conditions.",
        img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=400&q=80"
      }
    ]
  }
];

const Template3 = ({ isHome }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const deptDoctors = {
    1: ["Dr. S.B. Gangadhar", "Dr. Manjunath Sarangi"],
    3: ["Dr. Sugandh"],
    4: ["Dr. Arathi", "Dr. Shettykere", "Dr. Srinivas"],
    5: ["Dr. Hemraj"],
    6: ["Dr. Giridhar", "Dr. Rudresh"],
    7: ["Dr. Shankarlingaiah", "Dr. Niroop"],
    8: ["Dr. Padmanna Negli"],
    9: ["Dr. Shivaprasad", "Dr. Ashish"],
    10: ["Dr. Chaya", "Dr. Vijayalakshmi", "Dr. Susheelamma", "Dr. Nethra Dinesh", "Dr. Sunanda", "Dr. Anitha"],
    11: ["Dr. Nagabhushan", "Dr. Suresh"],
    12: ["Dr. Manjunath B", "Dr. Janardhan S"],
    13: ["Dr. Praveen"],
    14: ["Dr. Madhukar", "Dr. Prasanth"],
    15: ["Dr. Chandrashekar", "Dr. Nagarajaiah"]
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(null);

  useEffect(() => {
    if (selectedDept) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedDept]);

  useEffect(() => {
    if (!isHome && location.state?.selectedDeptId) {
      const dept = departments.find(d => d.id === location.state.selectedDeptId);
      if (dept) {
        setSelectedDept(dept);
      }
    }
  }, [location.state, isHome]);

  const handleDeptClick = (dept) => {
    if (isHome) {
      navigate('/testing3', { state: { selectedDeptId: dept.id } });
    } else {
      setSelectedDept(dept);
    }
  };

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="zcare-app-wrapper" style={{ marginTop: isHome ? '0px' : '75px', minHeight: isHome ? 'auto' : '100vh' }}>
      {selectedDept ? (
        /* =========================================================
           Visual Split Details Layout - Breathtakingly Beautiful
           ========================================================= */
        <div className="zcare-detail-view-container animate-zcare-slide">
          
          {/* Header Banner Section */}
          <div className="zcare-detail-banner">
            <div className="zcare-banner-grid-overlay"></div>
            <div className="container position-relative z-index-2 py-5">
              <button className="zcare-back-btn" onClick={() => setSelectedDept(null)}>
                <FaChevronLeft className="me-2" /> Back to Specialties
              </button>
              <div className="zcare-banner-text mt-4">
                <span className="zcare-tag-badge">
                  <FaAward className="me-1" /> Premium Medical Department
                </span>
                <h1 className="zcare-banner-title">{selectedDept.name}</h1>
                <p className="zcare-banner-subtitle">{selectedDept.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row g-4">
              
              {/* Left Column (Primary Content - Full width 100%) */}
              <div className="col-lg-12">
                
                {/* Section 1: Overview Card with Premium Split Layout */}
                <div className="zcare-primary-content-card mb-5">
                  <div className="row g-5 align-items-center">
                    
                    {/* Left half: Overview text & checklist Highlights */}
                    <div className="col-lg-6">
                      <div className="zcare-badge-label mb-2">Clinical Overview</div>
                      <h2 className="zcare-details-heading mb-3">Overview & Care Philosophy</h2>
                      <p className="zcare-content-para mb-4">{selectedDept.description}</p>
                      
                      <div className="zcare-highlights-box">
                        <h5 className="highlights-title d-flex align-items-center mb-3">
                          <FaShieldAlt className="text-cyan me-2" /> Why Choose Our {selectedDept.name}?
                        </h5>
                        <ul className="zcare-checklist">
                          {(selectedDept.highlights || [
                            "Equipped with world-class clinical instrumentation",
                            "Strict compliance with national safety guidelines",
                            "Continuous critical care backing"
                          ]).map((hl, index) => (
                            <li key={index} className="d-flex align-items-start gap-2 mb-2 small text-muted fw-medium">
                              <FaCheckCircle className="text-cyan flex-shrink-0 mt-1" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right half: Department image with Zoom Scale and Frame */}
                    <div className="col-lg-6">
                      <div className="zcare-accent-image-frame">
                        <img src={selectedDept.image} alt={selectedDept.name} className="img-fluid zcare-zoom-image" />
                        <div className="frame-overlay-badge d-flex align-items-center gap-2">
                          <FaHeartbeat className="pulse-icon text-danger" />
                          <span>Gurushree Health</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Section 2: Highly Attractive Multi-Image Advanced Procedures Showcase */}
                <div className="zcare-procedures-showcase-section mb-5">
                  <div className="text-center mb-4">
                    <span className="zcare-heading-tag text-center w-100">Clinical Procedures</span>
                    <h2 className="zcare-procedures-section-title">Advanced Treatments & Services</h2>
                    <p className="zcare-procedures-section-subtitle text-muted mx-auto">
                      Delivering exceptional healthcare outcomes utilizing the absolute highest standards of medical precision.
                    </p>
                  </div>

                  <div className="row g-4">
                    {selectedDept.treatments.map((tr, index) => (
                      <div key={index} className="col-12 col-md-4">
                        <div className="zcare-procedure-card">
                          <div className="procedure-img-box">
                            <img src={tr.img} alt={tr.title} className="procedure-image" />
                            <div className="procedure-number-badge">0{index + 1}</div>
                          </div>
                          <div className="procedure-card-body">
                            <h4 className="procedure-title">{tr.title}</h4>
                            <p className="procedure-desc text-muted mb-0">{tr.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Meet Our Specialists (Medixi inspired doctor profiles) */}
                {deptDoctors[selectedDept.id] && deptDoctors[selectedDept.id].length > 0 && (
                  <div className="zcare-doctors-section mt-5">
                    <div className="text-center mb-4">
                      <span className="zcare-heading-tag text-center w-100">Specialists Directory</span>
                      <h2 className="zcare-procedures-section-title">Meet Our Senior Physicians</h2>
                      <p className="zcare-procedures-section-subtitle text-muted mx-auto">
                        Highly qualified, dedicated specialists committed to your health and rehabilitation.
                      </p>
                    </div>

                    <div className="row g-4">
                      {deptDoctors[selectedDept.id].map((doctor, idx) => {
                        const avatarColor = ['0ea5e9', '8b5cf6', '10b981', 'f59e0b', 'ef4444'][doctor.length % 5];
                        return (
                          <div key={idx} className="col-md-4">
                            <div className="zcare-doctor-card">
                              <div className="doctor-avatar-box">
                                <img 
                                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.replace('Dr. ', ''))}&background=${avatarColor}&color=fff&size=120&bold=true`} 
                                  alt={doctor} 
                                />
                              </div>
                              <div className="doctor-card-info">
                                <span className="doctor-badge">Senior Consultant</span>
                                <h5 className="doctor-name">{doctor}</h5>
                                <p className="doctor-dept">{selectedDept.name}</p>
                                <div className="doctor-pulse-container d-flex align-items-center gap-2">
                                  <span className="pulse-indicator"></span>
                                  <span className="pulse-text">Available for Consultation</span>
                                </div>
                                {/* <div className="doctor-socials mt-3">
                                  <a href="#" className="social-icon"><FaFacebook /></a>
                                  <a href="#" className="social-icon"><FaTwitter /></a>
                                  <a href="#" className="social-icon"><FaLinkedin /></a>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      ) : (
        /* =========================================================
           ZenithCare Blue Showcase Category Grid (Overview)
           ========================================================= */
        <div className="zcare-showcase-wrapper" style={isHome ? { padding: '0px', margin: '0px' } : {}}>
          <div className={`container ${isHome ? 'py-0' : 'py-5'}`}>
            
            {/* Header Text Block */}
            <div className="zcare-header-block text-center text-lg-start mb-5 d-flex justify-content-between align-items-center flex-wrap gap-4">
              <div className="zcare-heading-left">
                <span className="zcare-heading-tag">Clinical Departments</span>
                <h2 className="zcare-heading-title">
                  Trusted Care, Every Step with <span className="text-cyan">Gurushree</span>
                </h2>
                <p className="zcare-heading-subtitle text-muted">
                  Prioritize your well-being with our highly expert care, specialized treatment modules and state-of-the-art medical diagnostics.
                </p>
              </div>
              <div className="zcare-heading-right">
                <div className="zcare-search-box">
                  <FaSearch className="zcare-search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search clinical speciality..." 
                    className="zcare-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Flat Solid Blue Category Grid Box */}
            <div className="zcare-navy-showcase-box">
              <div className="row g-4">
                {filteredDepartments.map((dept) => {
                  const doctorsCount = deptDoctors[dept.id] ? deptDoctors[dept.id].length : 0;
                  return (
                    <div key={dept.id} className="col-12 col-md-6 col-lg-4">
                      <div 
                        className="zcare-category-card"
                        onClick={() => handleDeptClick(dept)}
                      >
                        <div className="category-card-header d-flex justify-content-between align-items-start">
                          <div className="category-icon-box">
                            {dept.icon}
                          </div>
                          {doctorsCount > 0 && (
                            <span className="doctors-count-badge">
                              {doctorsCount} Specialist{doctorsCount > 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                        <h4 className="category-card-name">{dept.name}</h4>
                        {/* <p className="category-card-desc">{dept.description}</p> */}
                        {/* <div className="category-card-footer mt-auto d-flex align-items-center justify-content-between">
                          <span className="explore-tag">Explore Specialties <FaArrowRight className="arrow-icon ms-2" /></span>
                        </div> */}
                      </div>
                    </div>
                  );
                })}

                {filteredDepartments.length === 0 && (
                  <div className="col-12 py-5 text-center text-white">
                    <h5 className="fw-semibold">No medical specialties matched your search criteria.</h5>
                    <p className="text-white-50 mt-1">Please try typing a different search term or check spelling.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Template3;

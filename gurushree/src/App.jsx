import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Facilities from './pages/Facilities.jsx'
import Specialities from './pages/Specialities.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="py-5 bg-dark text-white">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <h4 className="fw-bold mb-4">Gurushree<span className="text-primary">.</span></h4>
                <p className="opacity-50 small">Providing world-class medical care with compassion and excellence. Your health is our priority since 2010.</p>
              </div>
              <div className="col-lg-4 text-lg-center">
                <h5 className="fw-bold mb-4">Quick Links</h5>
                <ul className="list-unstyled opacity-75 small">
                  <li className="mb-2"><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                  <li className="mb-2"><a href="/facilities" className="text-white text-decoration-none">Facilities</a></li>
                  <li className="mb-2"><a href="/specialities" className="text-white text-decoration-none">Specialities</a></li>
                </ul>
              </div>
              <div className="col-lg-4 text-lg-end">
                <h5 className="fw-bold mb-4">Emergency</h5>
                <p className="opacity-75 small mb-1">Call us 24/7</p>
                <h4 className="text-primary fw-bold">+91 98765 43210</h4>
              </div>
            </div>
            <hr className="my-5 opacity-25" />
            <div className="text-center">
              <p className="mb-0 opacity-50 small">&copy; 2026 Gurushree Medical. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

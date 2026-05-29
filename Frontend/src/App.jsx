import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './pages/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Facilities from './pages/Facilities.jsx'
import Team from './pages/Team.jsx'
import Specialities from './pages/Specialities.jsx'
import SuperSpecialities from './pages/SuperSpecialities.jsx'
import Contact from './pages/Contact.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Header from './Header.jsx'
import Template1 from './pages/Template1.jsx'
import Template2 from './pages/Template2.jsx'
import Template3 from './pages/Template3.jsx'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/team" element={<Team />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/super-specialities" element={<SuperSpecialities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testing" element={<Template1 />} />
          <Route path="/testing2" element={<Template2 />} />
          <Route path="/testing3" element={<Template3 />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App

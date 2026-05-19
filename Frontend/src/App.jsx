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

import Testing from './pages/testing.jsx'
import Testing2 from './pages/Testing2.jsx'
import Testing3 from './pages/Testing3.jsx'
import Header from './Header.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
< Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/team" element={<Team />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/super-specialities" element={<SuperSpecialities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testing" element={<Testing/>} />
          <Route path="/testing2" element={<Testing2/>} />
          <Route path="/testing3" element={<Testing3/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App

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

  
      </div>
    </Router>
  )
}

export default App

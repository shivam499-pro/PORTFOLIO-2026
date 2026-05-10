import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import DSA from './components/DSA'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <Navbar />
      
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DSA />
        <Experience />
        <Education />
        <Certifications />
        <CurrentlyBuilding />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills />
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

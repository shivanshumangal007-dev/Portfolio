import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import LetsCreate from './pages/LetsCreate.jsx'
import Footer from './pages/Footer.jsx'
const App = () => {
  return (
    // <div>
    //   <h1 className='text-[12rem] font-bold uppercase leading-40 w-3/4'>welcome to my portfolio</h1>
    // </div>
    <>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <LetsCreate/>
      <Footer/>
    </>
  )
}

export default App

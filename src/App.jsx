import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Testimoinal from './components/testomoinals/Testimoinal'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

function App() {
  

  return (
    <>
     <Header/>
     <main className="main">
      <Home/>
      <About/>
      <Skills/>
     <Contact/>
    
     </main>
     <Footer/>
     <ScrollUp/>
    </>
  )
}

export default App

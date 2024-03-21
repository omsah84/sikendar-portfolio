import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Work from './components/work/Work'
import Skills from './components/skills/Skills'
import Service from './components/services/Service'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Work/>
      <Skills/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Work from './components/work/Work'

export default function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Work/>
    </div>
  )
}

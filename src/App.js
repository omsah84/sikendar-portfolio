import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

export default function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Home/>
    </div>
  )
}

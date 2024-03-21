import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu';

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </div>
  )
}

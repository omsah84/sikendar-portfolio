import React from 'react'
import './navbar.scss';

export default function Navbar({openMenu, setOpenMenu}) {
  return (
    <div className={"topbar " + (openMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href='#' className='logo'>logo</a>
          <div className='contentItems'>
            <spam>number</spam>
          </div>
          <div className='contentItems'>
            <spam>number</spam>
          </div>
        </div>
        <div className="right">
          <div className="hambargir" onClick={()=>setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

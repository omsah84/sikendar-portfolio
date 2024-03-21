import React from 'react'
import "./menu.scss";

export default function Menu({openMenu, setOpenMenu}) {
  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </div>
  )
}

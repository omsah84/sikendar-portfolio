import React from 'react'
import './navbar.scss';
import { IoMdHome } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { MdGroupWork } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";


export default function Navbar() {
  return (
    <div id='navbar'>
      <ul>
        <li><a href='#home'><IoMdHome/></a></li>
        <li><a href='#contact'><IoMdContacts/></a></li>
        <li><a href='#skills'><GiSkills /></a></li>
        <li><a href='#work'><MdGroupWork/></a></li>
        <li><a href='#service'><RiCustomerService2Line/></a></li>
      </ul>
    </div>
  )
}

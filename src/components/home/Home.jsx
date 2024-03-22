import React from 'react'
import "./home.scss";
import HomeImage from "./../.././asset/home-image.png";

export default function Home() {
  return (
    <div id='home'>
      <div className="container">
        <div className='home-image'>
          <img src={HomeImage} alt='homeimage' />
        </div>
        <h1>I'm Sikandar Sah <br /><span>Full Stack Data Scientist</span></h1>
        <p>
        Proficient data scientist  in SQL, Python, Tableau, and Power BI, driven to leverage data for impactful business outcomes.</p>
      </div>
    </div>
  )
}

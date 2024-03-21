import React from 'react'
import "./service.scss";

const data = [
    {   
        id:"1",
        image:"image",
        title:"title1",
        describe:"loramasdlfkjasdfl",
        icon:"icon"
    },
    {   id:"2",
        image:"image",
        title:"title1",
        describe:"loramasdlfkjasdfl",
        icon:"icon"
    },
    {   id:"3",
        image:"image",
        title:"title1",
        describe:"loramasdlfkjasdfl",
        icon:"icon"
    },
    {   id:"4",
        image:"image",
        title:"title1",
        describe:"loramasdlfkjasdfl",
        icon:"icon"
    },
    {   id:"5",
        image:"image",
        title:"title1",
        describe:"loramasdlfkjasdfl",
        icon:"icon"
    },


];
export default function Service() {
  return (
    <div id='service'>
       <h2>MY SERVICES</h2>
      <div className="container">
        {data.map((data) =>{
            return(
            <div className='items' key={data.id}>
                <h3>{data.title}</h3>
                <img src={data.image} alt='banner'/>
                <h4>{data.describe}</h4>
                <span>{data.icon}</span>
            </div>
            )
        })}
        
      </div>
    </div>
  )
}

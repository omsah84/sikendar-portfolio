import React from 'react'
import "./work.scss";

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
    {   id:"6",
        image:"image",
        title:"title1",
        describe:"loramasdlfkjasdfl",
        icon:"icon"
    },
    {   id:"7",
        image:"image",
        title:"title1",
        describe:"loramasdlfkjasdfl",
        icon:"icon"
    },
    {   id:"8",
        image:"image",
        title:"title1",
        describe:"loramasdlfkjasdfl",
        icon:"icon"
    },
];

export default function Work() {
  return (
    <div id='work'>
      <h2>MY WORKS</h2>
      <div className="container">
        {data.map((data) =>{
            return(
            <div className='item1' key={data.id}>
                {data.title}
            </div>
            )
        })}
        
      </div>
    </div>
  )
}

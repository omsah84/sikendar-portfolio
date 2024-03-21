import React from 'react'
import "./skills.scss";

const data = [
    {   
        id:"1",
        image:"image",
        title:"title1",
    },
    {   id:"2",
        image:"image",
        title:"title1",
    },
    {   id:"3",
        image:"image",
        title:"title1",
    },
    {   id:"4",
        image:"image",
        title:"title1",
    },
    {   id:"5",
        image:"image",
        title:"title1",
    },
    {   id:"6",
        image:"image",
        title:"title1",
    },
    {   id:"7",
        image:"image",
        title:"title1",
    },
    {   id:"8",
        image:"image",
        title:"title1",
    },
];
export default function Skills() {
  return (
    <div id='skills'>
      <h2>SKILLS</h2>
      <div className="container">
        {data.map((data) =>{
            return(
            <div className='items' key={data.id}>
                <img src={data.image} alt='banner'/>
                <h3>{data.title}</h3>
            </div>
            )
        })}
      </div>
    </div>
  )
}

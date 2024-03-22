import React from 'react'
import "./skills.scss";
import ML from "../../asset/machineLearning.png";

const data = [
    {   
        id:"1",
        image:ML,
        title:"Machine Learning",
    },
    {   id:"2",
        image:"image",
        title:"Natural Language Processing",
    },
    {   id:"3",
        image:"image",
        title:"PowerBI",
    },
    {   id:"4",
        image:"image",
        title:"Data Preprocessing",
    },
    {   id:"5",
        image:"image",
        title:"Deep Learning",
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
    {   id:"9",
        image:"image",
        title:"title1",
    },
    {   id:"10",
        image:"image",
        title:"title1",
    },
    {   id:"11",
        image:"image",
        title:"title1",
    },
    {   id:"12",
        image:"image",
        title:"title1",
    },
    {   id:"13",
        image:"image",
        title:"title1",
    },
    {   id:"14",
        image:"image",
        title:"title1",
    },
    {   id:"15",
        image:"image",
        title:"title1",
    },
    {   id:"16",
        image:"image",
        title:"title1",
    },
    {   id:"17",
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
                <img src={data.image} alt='banner' />
                <h3>{data.title}</h3>
            </div>
            )
        })}
      </div>
    </div>
  )
}

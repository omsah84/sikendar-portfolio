    import React from 'react'
    import "./work.scss";
    import { FaExternalLinkAlt } from "react-icons/fa";
    import Image from "../../asset/home-image.png";

    const data = [
        {   
            id:"1",
            image:Image,
            title:"Dog Breed Classification",
            describe:"loramasdadfalfkjasdfl",
        },
        {   id:"2",
            image:"image",
            title:"title1",
            describe:"loramasdasdfalfkjasdfl",
        },
        {   id:"3",
            image:"image",
            title:"title1",
            describe:"loramasdadfadsflfkjasdfl",
        },
        {   id:"4",
            image:"image",
            title:"title1",
            describe:"loramasdlfkjadfsaasdfl",
        },
        {   id:"5",
            image:"image",
            title:"title1",
            describe:"loramasdadfasdlfkjasdfl",
        },

    ];

    export default function Work() {
    return (
        <div id='work'>
        <h2>MY WORKS</h2>
        <div className="container">
            {data.map((data) =>{
                return(
                <div className='items' key={data.id} style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    }}>
                    <h3>{data.title}</h3>
                    {/* <img src={data.image} alt='banner'/> */}
                    <h4>{data.describe}</h4>
                    <span><a href='www.google.come' target='_blank'><FaExternalLinkAlt/>  </a></span>
                </div>
                )
            })}
            
        </div>
        </div>
    )
    }

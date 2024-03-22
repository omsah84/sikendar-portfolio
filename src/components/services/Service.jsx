import React from 'react'
import "./service.scss";
import Image from "../../asset/home-image.png";

const data = [
    {
        id: "1",
        image: Image,
        title: "title1",
        describe: "loramasdlfkjasdfl",
    },
    {
        id: "2",
        image: "image",
        title: "title1",
        describe: "loramasdlfkjasdfl",
    },
    {
        id: "3",
        image: "image",
        title: "title1",
        describe: "loramasdlfkjasdfl",
    },
    {
        id: "4",
        image: "image",
        title: "title1",
        describe: "loramasdlfkjasdfl",
    },
    {
        id: "5",
        image: "image",
        title: "title1",
        describe: "loramasdlfkjasdfl",
    },

];
export default function Service() {
    return (
        <div id='service'>
            <h2>MY SERVICES</h2>
            <div className="container">
                {data.map((data) => {
                    return (
                        <div className='items' key={data.id} style={{
                            backgroundImage: `url(${data.image})`,
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                        }} >
                            <h3>{data.title}</h3>
                            <h4>{data.describe}</h4>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

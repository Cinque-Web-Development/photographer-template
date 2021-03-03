import React from 'react';
import './Landscape.css';

export default function Landscape({picture}) {
    return (
        picture.type === "landscape" ?
        <div className="port-pic">
           <img className="portfolio-pic" src={picture.picture} alt=""></img> 
        </div>
        :
        <div>
            Loading...
        </div>
    )
}

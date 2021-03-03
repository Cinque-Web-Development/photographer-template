import React from 'react';
import './PortfolioPic.css';

export default function PortfolioPic({picture}) {
    return (
        picture.type === "portrait" ?
        <div className="port-pic">
           <img className="portfolio-pic" src={picture.picture} alt=""></img> 
        </div>
        :
       ""
    )
}

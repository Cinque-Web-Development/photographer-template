import React from 'react'

export default function PortfolioPic({picture}) {
    return (
        picture.type === "portrait" ?
        <div className="port-pic">
           <img className="portfolio-pic" src={picture.picture} alt=""></img> 
        </div>
        :
        <div>
            Loading...
        </div>
    )
}

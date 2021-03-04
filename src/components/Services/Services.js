import React from 'react';
import './Services.css';

export default function Services({picture}) {
    return (
       picture.id === 2 || picture.id === 11 ?
        <div className="services-page">
            <div className="service-image">
                <img className="service-img" src={picture.picture} alt=""></img>
            </div>
            <div className="service-banner">
                <div className="banner">
                    <h1 className="banner-head">{picture.type}</h1>
                    <br />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a className="feature-link" href="/">Book Now</a>
                </div>
            </div>
        </div>
        :
        ''
    )
}

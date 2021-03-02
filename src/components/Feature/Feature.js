import React from 'react';
import './Feature.css';
import Michael from '../../assets/michael.jpg';


export default function Feature() {
  
    return (
        <div className="feature" >
            <div className="feature-name">
                <div className="feature-banner">
                    <h2>Michael Oxendine</h2><br/>
                    <h1 className="photography">Photography</h1>
                    <br/>
                    <br />
                    <br />
                    <a className="feature-link" href="/">Book Now</a>
                </div>
            </div>
            <div className="feature-image">
                <img className="feat-img" src={Michael} alt=""></img>
            </div>
        </div>
    )
}

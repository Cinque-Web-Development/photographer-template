import React from 'react';
import './Feature.css';
import FeaturePic from '../../assets/featurepic.jpg';
import Lander from '../../assets/lander.jpg';


export default function Feature() {
  
    return (
        <div className="feature" >
            <div className="feature-name">
                <div className="feature-banner">
                    <h2>Logan Weaver</h2><br/>
                    <h1>Photography</h1>
                    <br/>
                    <br />
                    <br />
                    <a className="feature-link" href="/">Book Now</a>
                </div>
            </div>
            <div className="feature-image">
                <img className="feat-img" src={Lander} alt=""></img>
            </div>
        </div>
    )
}

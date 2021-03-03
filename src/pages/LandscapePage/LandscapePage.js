import React from 'react';
import './LandscapePage.css';
import Landscape from '../../components/Portfolio/Landscape';
import {pictureDB} from '../../picutreDB';

export default function LandscapePage() {
    return (
        <div className="landscape-page">
            <h1 className="landscape-header">Landscapes</h1>
            {pictureDB.map(picture => 
            <Landscape picture={picture}/>
                )}
        </div>
    )
}

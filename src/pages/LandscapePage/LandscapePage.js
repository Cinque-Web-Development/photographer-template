import React from 'react';
import './LandscapePage.css';
import Landscape from '../../components/Portfolio/Landscape';
import {pictureDB} from '../../picutreDB';

export default function LandscapePage() {
    return (
        <div className="landscape-page">
            {pictureDB.map(picture => 
            <Landscape picture={picture}/>
                )}
        </div>
    )
}

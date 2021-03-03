import React from 'react';
import './PortraitPage.css';
import PortfolioPic from '../../components/Portfolio/PortfolioPic';
import {pictureDB} from '../../picutreDB';

export default function PortraitPage() {
    return (
        <>
        <div className="portrait">
        <h1 className="portrait-header">Portraits</h1>
            {pictureDB.map(picture => 
            <PortfolioPic picture={picture}/>
            )}
        </div>
        </>
    )
}

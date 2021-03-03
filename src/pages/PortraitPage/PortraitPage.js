import React from 'react';
import './PortraitPage.css';
import PortfolioPic from '../../components/Portfolio/PortfolioPic';
import {pictureDB} from '../../picutreDB';

export default function PortraitPage() {
    return (
        <div className="portrait">
            {pictureDB.map(picture => 
            <PortfolioPic picture={picture}/>
            )}
        </div>
    )
}

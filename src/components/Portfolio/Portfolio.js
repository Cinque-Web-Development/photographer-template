import React from 'react'
import './Portfolio.css';
import {pictureDB} from '../../picutreDB';
import PortfolioPic from './PortfolioPic';

export default function Portfolio() {
    return (
        <div className="portfolio">
            {pictureDB.map(picture => 
              <PortfolioPic picture={picture}/>
            )}
        </div>
    )
}

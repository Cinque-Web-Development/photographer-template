import React from 'react'
import './Portfolio.css';
import {pictureDB} from '../../picutreDB';
import PortfolioPic from './PortfolioPic';
import Landscape from './Landscape';

export default function Portfolio() {
    return (
        <div className="portfolio">
            {pictureDB.map(picture =>
            <div>
              <PortfolioPic picture={picture}/>
              <Landscape picture={picture}/>
              </div>
            )}
        </div>
    )
}

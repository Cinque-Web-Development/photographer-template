import React from 'react';
import './Services.css';
import {pictureDB} from '../../picutreDB';
import Services from '../../components/Services/Services';

export default function ServicesPage() {
    return (
        <div className="services">
            <h1 className="service-heading">Services</h1>
           {pictureDB.map(picture =>
            <Services picture={picture}/>
           )}
        </div>
    )
}

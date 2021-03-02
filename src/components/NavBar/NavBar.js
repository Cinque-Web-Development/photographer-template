import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
               <h1>Logan Weaver</h1>
            </div>
            <div className="nav-links">
                <Link className="link" to="/portfolio">Portfolio</Link>
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
                <i className="link fas fa-user-circle fa-2x"></i>
            </div>
        </div>
    )
}

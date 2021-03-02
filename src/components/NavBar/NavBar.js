import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
               <Link className="link" to="/"><h1>Michael Oxendine</h1></Link>
            </div>
            <div className="nav-links">
            <div class="dropdown-comp ui compact menu">
                <div class="dropdown-menu ui simple dropdown item">
                     Portfolio
                 <i class="dropdown icon"></i>
                <div class="menu-list menu">
                <a className="portfolio-links" href="/portrait">Portrait</a><br />
                <a className="portfolio-links" href="/landscape">Landscape</a>
                </div>
                </div>
                </div>
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
                <i className="link fas fa-user-circle fa-2x"></i>
            </div>
        </div>
    )
}

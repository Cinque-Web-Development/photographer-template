import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="cinque-footer">
                &copy; 2021 by <a className="link" href="https://www.cinquewd.com" target="_blank" rel="noreferrer">Cinque Web Development</a>
            </div>
            <div className="social-footer">
                <a className="link" href="/">Instagram</a>
                <a className="link" href="/">Facebook</a>
                <a className="link" href="/">Twitter</a>
            </div>
        </div>
    )
}

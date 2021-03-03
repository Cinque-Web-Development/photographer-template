import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
    return (
        <div class="contact">
           <h1 className="contact-head">Get in Touch</h1>
           <div className="contact-page">
            <div className="contact-info">
                <p>For inquiries about sessions and pricing <br/>fill out the form and someone will get back to you.</p>
                <p>123 Made Up Street</p>
                <p>New York City, NY</p>
                <a className="social-links" href="mailto:samueldaletrahan@gmail.com">info@mysite.com</a>
                <a className="social-links" href="tel:3375554510">337-555-4510</a>
                <div>
                <a href="/" className="social-links"><i className="fab fa-facebook"></i></a>
                <a href="/" className="social-links"><i className="fab fa-instagram"></i></a>
                <a href="/" className="social-links"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            <div className="contact-form">

            </div>
           </div>
        </div>
    )
}

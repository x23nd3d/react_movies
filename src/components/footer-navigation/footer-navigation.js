import React from 'react';
import './footer-navigation.css';

const FooterNavigation = () => {
    return(
        <ul className="footer-nav">
            <li className="footer-navbar">
                <a href="/instagram" className="footer-navbar-link">instagram</a>
            </li>
            <li className="footer-navbar">
                <a href="/facebook" className="footer-navbar-link">facebook</a>
            </li>
            <li className="footer-navbar">
                <a href="/telegram" className="footer-navbar-link">telegram</a>
            </li>
        </ul>
    )
}

export default FooterNavigation;
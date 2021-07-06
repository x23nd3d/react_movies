import React from 'react';
import './navigation.css';

const Navigation = () => {
    return (
        <ul className="navbar">
            <li className="navbar-nav">
                <a href="/about" className="navbar-nav-link">about</a>
            </li>
            <li className="navbar-nav">
                <a href="/team" className="navbar-nav-link">our team</a>
            </li>
            <li className="navbar-nav">
                <a href="/contacts" className="navbar-nav-link">contacts</a>
            </li>
            <li className="navbar-nav">
                <a href="/feedback" className="navbar-nav-link">feedback</a>
            </li>
        </ul>
    )
}

export default Navigation;
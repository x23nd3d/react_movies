import React from 'react';
import './button.css';

const Button = ({href, text}) => {
    return (
        <div className="main-btn">
            <a className="main-btn-link" href={href}>{text}</a>
        </div>
    )
}

export default Button;
import React from 'react';
import './button.css';

const Button = ({href, text}) => {
    return (
        <div className="main-btn">
            <a href={href}>{text}</a>
        </div>
    )
}

export default Button;
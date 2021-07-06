import React from 'react';
import './greet.css';

const Greet = ({children, title, descr}) => {
    return (
        <div className="greet">
            <p className="greet-big">{title}</p>
            <p className="greet-descr">{descr}</p>
            {children}
        </div>
    )
}

export default Greet;
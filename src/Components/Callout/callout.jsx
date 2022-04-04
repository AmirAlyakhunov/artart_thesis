import React from 'react';
import './callout.css';

const Callout = ({children, src}) => {
    return (
        <div className='callout-container'>
            <img src={src} className='callout-icon'/>
            {children}
        </div>
    );
};

export default Callout;
import React from 'react';
import './notFound.css';

const NotFound = () => {
    return (
        <div className='notFound-container'>
            <div className='notFound-title'>
                404
            </div>
            <div className='notFound-description'>
                К сожалению, мы не нашли то, что вы искали
            </div>
        </div>
    );
};

export default NotFound;
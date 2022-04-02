import React from 'react';
import './field.css';

const Field = ({placeholder, type, src, id, onChange, value, style, onFocus, onBlur}) => {
    return (
        <div className='field-container'style={style}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                id={id}
                type={type}
                placeholder={placeholder}
            />
            <img src={src} className='field-icon'/>
        </div>
    );
};

export default Field;
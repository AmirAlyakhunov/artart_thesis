import React from 'react';
import './partsHeader.css';
import Button from "../../../../Components/Button/button";
import IconButton from "../../../../Components/IconButtons/iconButton";

const PartsHeader = ({style, children, btnText, btnStyle, iconBtnStyle, iconBtnIcon, btnClickHandler}) => {
    return (
        <div className='parts-header' style={style}>
            {children}
            <Button type={'tertiary'} style={btnStyle} clickHandler={btnClickHandler}>{btnText}</Button>
            <IconButton style={iconBtnStyle} icon={iconBtnIcon}/>
        </div>
    );
};

export default PartsHeader;
import React from 'react';
import './logotype.css';
import {ArtLogo, ArtLogoShort} from "../../Assets/variableSvg";
import {Link} from "react-router-dom";

const Logotype = ({style}) => {
    return (
        <Link to='/' style={style}>
            <div className='artLogo'>
                <img src={ArtLogo} alt="ArtLogo" style={{maxWidth: 'none'}}/>
            </div>
        </Link>
    );
};

export default Logotype;
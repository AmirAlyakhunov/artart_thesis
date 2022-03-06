import React from 'react';
import './logotype.css';
import {ArtLogo} from "../../Assets/variableSvg";
import {Link} from "react-router-dom";

const Logotype = () => {
    return (
        <Link to='/'>
            <div className='artLogo'>
                <img src={ArtLogo} alt="ArtLogo"/>
            </div>
        </Link>
    );
};

export default Logotype;
import React from 'react';
import './likeTag.css';
import {LikeIcon} from "../../Assets/variableSvg";

const LikeTag = () => {
    return (
        <div className='likeTag-container'>
            <img src={LikeIcon}/>
        </div>
    );
};

export default LikeTag;
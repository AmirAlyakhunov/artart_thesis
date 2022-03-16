import React, {useState} from 'react';
import './home.css';
import FirstWork from "../GeneralParts/Body/FirstWork/firstWork";
import Events from "../GeneralParts/Body/Events/events";
import Artists from "../GeneralParts/Body/Artists/artists";

const Home = () => {
    return (
        <div className='main-container'>
            <FirstWork/>
            <Events/>
            <Artists/>
        </div>
    );
};

export default Home;
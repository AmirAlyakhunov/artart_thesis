import React, {useState} from 'react';
import './home.css';
import FirstWork from "../GeneralParts/Body/FirstWork/firstWork";
import Events from "../GeneralParts/Body/Events/events";

const Home = () => {
    return (
        <div className='main-container'>
            <FirstWork/>
            <Events/>
        </div>
    );
};

export default Home;
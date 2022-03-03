import React from 'react';
import {Routes, Route} from "react-router-dom";
import {useCookies} from "react-cookie";

const AppRouter = () => {
    const [cookies] = useCookies(['access-token', 'refresh-token']);

    return (
        cookies['access-token'] ?
           <Routes>

           </Routes>
           :
           <Routes>

           </Routes>
    );
};

export default AppRouter;
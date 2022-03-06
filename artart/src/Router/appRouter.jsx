import React from 'react';
import {Routes, Route} from "react-router-dom";
import {public_route, private_route} from './routes';
import {useCookies} from "react-cookie";

const AppRouter = () => {
    const [cookies] = useCookies(['access_token', 'refresh_token']);

    return (
        cookies.access_token ?
           <Routes>
               { private_route.map((router) => <Route path={router.path} element={router.element}/>) }
           </Routes>
           :
           <Routes>
               { public_route.map((router) => <Route path={router.path} element={router.element}/>) }
           </Routes>
    );
};

export default AppRouter;
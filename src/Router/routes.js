import Home from "../Pages/Home/home";
import EventsFull from "../Pages/EventsFull/eventsFull";
import ArtistsFull from "../Pages/ArtistsFull/artistsFull";

export const public_route = [
    {path: '/', element: <Home/>},
    {path: '/events', element: <EventsFull/>},
    {path: '/persons', element: <ArtistsFull/>},
];

export const private_route = [
    {path: '/', element: <Home/>},
    {path: '/events', element: <EventsFull/>},
    {path: '/persons', element: <ArtistsFull/>},
];
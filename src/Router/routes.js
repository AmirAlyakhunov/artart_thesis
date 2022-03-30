import Home from "../Pages/Home/home";
import EventsFull from "../Pages/EventsFull/eventsFull";
import ArtistsFull from "../Pages/ArtistsFull/artistsFull";
import EventArticle from "../Pages/EventArticle/eventArticle";
import ArtistArticle from "../Pages/ArtistArticle/artistArticle";

export const public_route = [
    {path: '/', element: <Home/>},
    {path: '/events', element: <EventsFull/>},
    {path: '/persons', element: <ArtistsFull/>},
    {path: '/event/:id', element: <EventArticle/>},
    {path: '/person/:id', element: <ArtistArticle/>},
];

export const private_route = [
    {path: '/', element: <Home/>},
    {path: '/events', element: <EventsFull/>},
    {path: '/persons', element: <ArtistsFull/>},
    {path: '/event/:id', element: <EventArticle/>},
    {path: '/person/:id', element: <ArtistArticle/>},
];
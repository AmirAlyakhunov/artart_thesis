import Home from "../Pages/Home/home";
import EventsFull from "../Pages/EventsFull/eventsFull";
import ArtistsFull from "../Pages/ArtistsFull/artistsFull";
import EventArticle from "../Pages/EventArticle/eventArticle";
import ArtistArticle from "../Pages/ArtistArticle/artistArticle";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Singup/signup";
import Profile from "../Pages/Profile/profile";

export const public_route = [
    {path: '/', element: <Home/>},
    {path: '/events', element: <EventsFull/>},
    {path: '/persons', element: <ArtistsFull/>},
    {path: '/event/:id', element: <EventArticle/>},
    {path: '/person/:id', element: <ArtistArticle/>},
    {path: '/login', element: <Login/>},
    {path: '/signup', element: <Signup/>},
];

export const private_route = [
    {path: '/', element: <Home/>},
    {path: '/events', element: <EventsFull/>},
    {path: '/persons', element: <ArtistsFull/>},
    {path: '/event/:id', element: <EventArticle/>},
    {path: '/person/:id', element: <ArtistArticle/>},
    {path: '/user/me', element: <Profile/>},
];
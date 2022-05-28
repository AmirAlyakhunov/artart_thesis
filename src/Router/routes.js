import Home from "../Pages/Home/home";
import EventsFull from "../Pages/EventsFull/eventsFull";
import ArtistsFull from "../Pages/ArtistsFull/artistsFull";
import EventArticle from "../Pages/EventArticle/eventArticle";
import ArtistArticle from "../Pages/ArtistArticle/artistArticle";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Singup/signup";
import Profile from "../Pages/Profile/profile";
import NotFound from "../Pages/NotFound/notFound";
import ResetPassword from "../Pages/ResetPassword/resetPassword";
import EmailConfirm from "../Pages/EmailConfirm/emailConfirm";
import EmailChecked from "../Pages/EmailConfirm/emailChecked";
import ResetPasswordEmailSent from "../Pages/ResetPassword/resetPasswordEmailSent";
import ResetPasswordConfirm from "../Pages/ResetPassword/resetPasswordConfirm";
import ProfileEdit from "../Pages/ProfileEdit/profileEdit";
import EmailUpdateChecked from "../Pages/EmailConfirm/emailUpdateChecked";

export const public_route = [
    {path: '/', element: <Home/>},
    {path: '/events', element: <EventsFull/>},
    {path: '/persons', element: <ArtistsFull/>},
    {path: '/event/:id', element: <EventArticle/>},
    {path: '/person/:id', element: <ArtistArticle/>},
    {path: '/login', element: <Login/>},
    {path: '/signup', element: <Signup/>},
    {path: '/resetPassword', element: <ResetPassword/>},
    {path: '/emailConfirm', element: <EmailConfirm/>},
    {path: '/emailConfirm/:token', element: <EmailChecked/>},
    {path: '/emailUpdateChecked/:token', element: <EmailUpdateChecked/>},
    {path: '/resetPasswordEmailSent', element: <ResetPasswordEmailSent/>},
    {path: '/resetPasswordConfirm/:token', element: <ResetPasswordConfirm/>},
    {path: '*', element: <NotFound/>},
];

export const private_route = [
    {path: '/', element: <Home/>},
    {path: '/events', element: <EventsFull/>},
    {path: '/persons', element: <ArtistsFull/>},
    {path: '/event/:id', element: <EventArticle/>},
    {path: '/person/:id', element: <ArtistArticle/>},
    {path: '/user/me', element: <Profile/>},
    {path: '/emailConfirm', element: <EmailConfirm/>},
    {path: '/emailConfirm/:token', element: <EmailChecked/>},
    {path: '/emailUpdateChecked/:token', element: <EmailUpdateChecked/>},
    {path: '/user/me/edit', element: <ProfileEdit/>},
    {path: '*', element: <NotFound/>},
];
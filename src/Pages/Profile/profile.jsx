import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import './profile.css';
import {Buffer} from 'buffer';
import {useCookies} from "react-cookie";
import PostGetData from "../../API/postGetData";
import Button from "../../Components/Button/button";
import PartsHeader from "../../Components/PartsHeader/partsHeader";
import ArtistCard from "../Home/GeneralParts/Body/Artists/ArtistCard/artistCard";
import Loader from "../../Components/Loader/loader";
import ScrollToTop from "../../ScrollFunction/scrollToTop";
import {EmptyImgIcon} from "../../Assets/variableSvg";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const Profile = () => {
    const redirect = useNavigate();
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);
    const [user, setUser] = useState({});
    const [favPerson, setFavPerson] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() =>{
        User(cookies.access_token)
        LikedArtist(cookies.access_token)
    }, [])

    async function User() {
        setIsLoading(true);
        let expDate = Buffer.from(cookies.access_token.split('.')[1], "base64").toString();
        expDate = JSON.parse(expDate);
        let newDate = new Date(expDate.exp * 1000);
        let today = new Date()
        if (today < newDate) {
            const response = await PostGetData.getUser(cookies.access_token)
            setUser(response.data)
        }
        else {
            const response = await PostGetData.postRefresh(cookies.refresh_token)
            setCookie('access_token', response.data.accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            setCookie('refresh_token', response.data.refreshToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
        }
        setIsLoading(false);
    }

    async function LikedArtist() {
        const response = await PostGetData.getLikedArtist(cookies.access_token)
        setFavPerson(response?.data)
    }

    return (
        <div className='main-container' style={{alignItems: 'center', width: '100%'}}>
            <ScrollToTop/>
            {
                isLoading ? <Loader/> :
                    <>
                        <div className='profile-container'>
                            <img src={user.userpic} className='profile-userpic'/>
                            <div className='profile-username'>{user.name}</div>
                            <div className='profile-email'>{user.email}</div>
                            <Button type={'secondary'} style={{marginBottom: '36px', width: '100%'}} clickHandler={() => redirect('/user/me/edit')}>Изменить профиль</Button>
                        </div>

                        <PartsHeader children={'Вам понравились'} iconBtnStyle={{display: 'none'}} btnStyle={{display: 'none'}}/>
                        {
                            favPerson['persons']?.length === 0 ?
                                <div className='artists-cards-container-empty'>
                                    <img src={EmptyImgIcon} style={{marginBottom: '16px'}}/>
                                    Пока тут пусто. Добавьте карточку артиста в избранное
                                </div> :
                                <div className='artists-cards-container'>
                                    {
                                        favPerson['persons']?.map((post) => <ArtistCard post={post} key={post.id}/>)
                                    }
                                </div>
                        }

                    </>
            }
        </div>
    );
};

export default Profile;
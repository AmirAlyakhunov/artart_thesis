import React, {useEffect, useState} from 'react';
import Loader from "../../Components/Loader/loader";
import PartsHeader from "../../Components/PartsHeader/partsHeader";
import {useCookies} from "react-cookie";
import ApiData from "../../API/apiData";
import ArtistCard from "../Home/GeneralParts/Body/Artists/ArtistCard/artistCard";
import Button from "../../Components/Button/button";

const ArtistsFull = () => {
    const [posts, setPosts] = useState([]);
    const [cookies] = useCookies(['access_token', 'refresh_token']);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        fetchPerson()
    }, []);
    async function fetchPerson(){
        setIsLoading(true);
        if(!cookies.access_token){
            const response = await ApiData.getAllPersons()
            setPosts(response.data['persons'])
        }
        else{
            const response = await ApiData.getAllPersons(cookies.access_token)
            setPosts(response.data['persons'])
        }
        setIsLoading(false);
    }

    return (
        <div className='main-container'>
            {
                isLoading ? <Loader/> :
                    <>
                        <PartsHeader children={'Справочник'} iconBtnStyle={{display: 'none'}} btnStyle={{display: 'none'}}/>
                        <div className='artists-cards-container'>
                            {
                                posts.map(post => <ArtistCard post={post} key={post.id}/>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default ArtistsFull;
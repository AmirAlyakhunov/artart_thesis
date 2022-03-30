import React, {useState, useEffect} from 'react';
import './artists.css';
import PartsHeader from '../PartsHeader/partsHeader';
import ArtistCard from './ArtistCard/artistCard';
import Loader from '../../../../Components/Loader/loader';
import PostGetData from "../../../../API/postGetData";
import {useCookies} from "react-cookie";
import Button from "../../../../Components/Button/button";
import {useNavigate} from "react-router-dom";

const Artists = () => {
    const [posts, setPosts] = useState([]);
    const [cookies] = useCookies(['access_token', 'refresh_token']);
    const [isLoading, setIsLoading] = useState(false);

    const redirect = useNavigate();

    useEffect(() =>{
        fetchPerson()
    }, []);
    async function fetchPerson(){
        setIsLoading(true);
        if(!cookies.access_token){
            const response = await PostGetData.getPersons()
            setPosts(response.data['persons'])
        }
        else{
            const response = await PostGetData.getPersons(cookies.access_token)
            setPosts(response.data['persons'])
        }
        setIsLoading(false);
    }

    return (
        <div className='artists-container'>
            {
                isLoading ? <Loader/> :
                    <>
                        <PartsHeader children={'Справочник'} iconBtnStyle={{display: 'none'}} btnText={'Смотреть всё'} btnClickHandler={() => redirect('/persons')}/>
                        <div className='artists-cards-container'>
                            {
                                posts.map(post => <ArtistCard post={post} key={post.id}/>)
                            }
                        </div>
                        <Button type={'secondary'} style={{marginTop: '24px'}} clickHandler={() => redirect('/persons')}>Открыть справочник</Button>
                    </>
            }
        </div>
    );
};

export default Artists;
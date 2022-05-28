import React, {useEffect, useState} from 'react';
import './searchResultDesktop.css';
import PostGetData from "../../API/postGetData";
import Loader from "../Loader/loader";
import SearchResultRow from "../SearchResultRow/searchResultRow";
import Button from "../Button/button";
import {EmojiGhost, EmojiSadIcon} from "../../Assets/variableSvg";

const SearchResultDesktop = ({onClick, value, toClose}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const filteredPerson = posts.filter(artist => {
        return artist.fullname.toLowerCase().includes(value.query.toLowerCase())
    })

    useEffect(() =>{
        fetchPerson()
    }, []);
    async function fetchPerson(){
        setIsLoading(true);
        const response = await PostGetData.getAllPersons()
        setPosts(response.data['persons'])
        setIsLoading(false);
    }

    return (
        <div className='searchResultDesktop-container'>
            {
                isLoading ? <Loader/> :
                    <>
                        {
                            filteredPerson.length !== 0 ? filteredPerson.map((post) => <SearchResultRow post={post} key={post.id} onClick={onClick}/>) :
                                <div className='searchResultDesktop-container-noResult'>
                                    <img src={EmojiGhost} style={{marginBottom: '16px'}}/>
                                    К сожалению, не удалось никого найти
                                </div>
                        }
                    </>
            }
            <div className='searchResultDesktop-close'>
                <Button type={'secondary'} clickHandler={toClose}>Закрыть</Button>
            </div>
        </div>
    );
};

export default SearchResultDesktop;
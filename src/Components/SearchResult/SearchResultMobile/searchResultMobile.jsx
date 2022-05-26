import React, {useEffect, useState} from 'react';
import './searchResultMobile.css';
import IconButton from "../../IconButtons/iconButton";
import {CloseIcon, EmojiSadIcon, SearchIcon} from "../../../Assets/variableSvg";
import Field from "../../Field/field";
import Loader from "../../Loader/loader";
import SearchResultRow from "../../SearchResultRow/searchResultRow";
import PostGetData from "../../../API/postGetData";

const SearchResultMobile = ({clickHandler}) => {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState({query:''});
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

    const handleSearchGoTo = () => {
        setTimeout(() => {  window.location.reload()  }, 10);
    }

    return (
        <div className='searchResultMobile-container'>
            <div className='header-container'>
                <div className='searchResultMobile-header'>
                    <Field src={SearchIcon} placeholder={'Поиск артистов'} type={'text'} onFocus={true}
                           value={value.query} onChange={(event) => setValue({...value, query: event.target.value})}/>
                    <IconButton icon={CloseIcon} clickHandler={clickHandler} style={{marginRight: '0'}}/>
                </div>

            </div>
            {
                isLoading ? <Loader/> :
                    <>
                        {
                            filteredPerson.length !== 0 ? filteredPerson.map((post) => <SearchResultRow post={post} key={post.id} onClick={handleSearchGoTo} style={{marginBottom: '8px'}}/>) :
                                <div className='searchResultDesktop-container-noResult'>
                                    <img src={EmojiSadIcon} style={{marginBottom: '16px'}}/>
                                    К сожалению, не удалось никого найти
                                </div>
                        }
                    </>
            }
        </div>
    );
};

export default SearchResultMobile;
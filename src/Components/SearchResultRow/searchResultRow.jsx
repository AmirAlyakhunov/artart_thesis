import React from 'react';
import './searchResultRow.css';
import {Link} from "react-router-dom";

const SearchResultRow = ({post, onClick}) => {
    return (
       <Link to={`/person/${post.id}`} className='searchResultRow-container' onClick={onClick}>
           <img src={post.personpic} className='artistCard-personImage'/>
           <div className='searchResultRow-artistName-container'>
               <div className='searchResultRow-artistName'>{post.fullname}</div>
               <div className='artistCard-personData-tags-container'>
                   {
                       post.tags?.map(tag => <div className='searchResultRow-artistName-tags' key={tag.id}>{tag.title}</div>)
                   }
               </div>
           </div>
       </Link>
    );
};

export default SearchResultRow;
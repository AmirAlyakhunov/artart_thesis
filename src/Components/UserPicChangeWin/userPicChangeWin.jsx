import React from 'react';
import './userPicChangeWin.css';

const UserPicChangeWin = ({onChangeImg, onClickDeleteImg, onClickCancel}) => {
    return (
        <div className='userPicChangeWin-container'>
            <div className='userPicChangeWindow'>
                <div className='userPicChangeWindow-header'>Изменение аватара</div>
                <div className='userPicChangeWindow-row'>
                    <div className='userPicChangeWindow-row-uploadText'>Загрузить фотографию</div>
                    <input type="file" accept={'image/jpg, image/png'} onChange={onChangeImg}/>
                </div>
                <div className='userPicChangeWindow-row'>
                    <button onClick={onClickDeleteImg} className='userPicChangeWindow-button' style={{color: '#F00000'}}>Удалить фотографию</button>
                </div>
                <div className='userPicChangeWindow-row' style={{boxShadow: 'none'}}>
                    <button onClick={onClickCancel} className='userPicChangeWindow-button'>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default UserPicChangeWin;
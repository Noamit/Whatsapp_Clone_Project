import React from 'react'
import './SingleSideChat.css'
import dataBase from './DataBase'

function SingleSideChat({name, chatWithX}) {
    return (
        <label className='SingleSideChat' htmlFor="chatButton">
            <img src={dataBase.usersDataBase.get(name).img} className="rounded-circle" alt="new contant" />
            <div className='SingleSideChat_info'>
                <div className='a'>
                    <div id="info_name">{name} </div>
                    <p id="info_message">hello</p>
                </div>
            </div>
            <div id="info_lastSeen">02:00</div>
            <button id="chatButton" onClick={() => { chatWithX(name) }} hidden/>
        </label>
    )
}

export default SingleSideChat

import React from 'react'
import './SingleSideChat.css'
import img2 from './img2.jpg'

function SingleSideChat({ name, lastMessage, lastseen, ifOnChat}) {
    return (
        <label className='SingleSideChat' for="chatButton">
            <img src={img2} className="rounded-circle" alt="new contant" />
            <div className='SingleSideChat_info'>
                <div className='a'>
                    <div id="info_name">{name} </div>
                    <p id="info_message">{lastMessage}</p>
                </div>
            </div>
            <div id="info_lastSeen">{lastseen}</div>
            
            <button id="chatButton" onClick={()=>{ ifOnChat(true); }} hidden>
            </button>

        </label>
    )
}

export default SingleSideChat

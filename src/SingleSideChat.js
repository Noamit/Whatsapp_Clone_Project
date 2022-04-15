import React from 'react'
import './SingleSideChat.css'
import img2 from './img2.jpg'

function SingleSideChat({ name, lastMessage, lastseen }) {
    return (
        <p className='SingleSideChat'>
            <img src={img2} className="rounded-circle" alt="new contant" />
            <div className='SingleSideChat_info'>
                <div className='a'>
                    <div id="info_name">{name} </div>
                    <p id="info_message">{lastMessage}</p>
                </div>
            </div>
            <div id="info_lastSeen">{lastseen}</div>
        </p>
    )
}

export default SingleSideChat

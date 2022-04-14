import React from 'react'
import './SingleSideChat.css'
import img2 from './img2.jpg'

function SingleSideChat({ name, lastMessage, lastseen }) {
    return (
        <p className='SingleSideChat'>
            <img id="b" src={img2} className="rounded-circle" alt="new contant" />
            <div className='SingleSideChat_info'>
                <p className='a'>
                <div id="info_name">{name} </div>
                <div className="info_lastSeen">{lastseen}</div>
                </p>
                <div className="info_message">{lastMessage}</div>
            </div>
        </p>
    )
}

export default SingleSideChat

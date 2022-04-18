import React from 'react'
import './SingleSideChat.css'
import img2 from './img2.jpg'

function SingleSideChat({name}) {
    return (
        <label className='SingleSideChat' for="chatButton">
            <img src={img2} className="rounded-circle" alt="new contant" />
            <div className='SingleSideChat_info'>
                <div className='a'>
                    <div id="info_name">{name} </div>
                    <p id="info_message">hello</p>
                </div>
            </div>
            <div id="info_lastSeen">02:00</div>
            
            <button id="chatButton" onClick={()=>true} hidden/>
            

        </label>
    )
}

export default SingleSideChat

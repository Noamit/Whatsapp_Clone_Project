import React from 'react'
import './SingleSideChat.css'
import img2 from './img2.jpg'
import dataBase from './DataBase'

function SingleSideChat({ name, chatWithX }) {


    return (
        <>
            <label className='SingleSideChat' htmlFor={name}>
                <img src={img2} className="rounded-circle" alt="new contant" />
                <div className='SingleSideChat_info'>
                    <div className='a'>
                        <div id="info_name">{dataBase.usersDataBase.get(name).displayName} </div>
                        <p id="info_message">hello</p>
                   </div>
                </div>
                <div id="info_lastSeen">02:00</div>
            </label>
            <input type="button" id={name} onClick={() => { chatWithX(name) }} hidden />
        </>

    )
}

export default SingleSideChat

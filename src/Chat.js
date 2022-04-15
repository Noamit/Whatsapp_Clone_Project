import React from 'react'
import './Chat.css'
import img1 from './photo.jpg'
import { Paperclip } from 'react-bootstrap-icons'
//88

function Chat() {
  return (
    <div className='chat'>
      <div className='chat_header'>
      <img src={img1} className="rounded-circle" alt='user' />
        <div className='header_info'>
           <h2>Tomer</h2>
           <p>Last seen at...</p>
        </div>
      
      </div>

      <div className='chat_body'>

      </div>

      <div className='chat_input'>
        <button><Paperclip /></button>
        <form>
          <input placeholder='Type a Message' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat
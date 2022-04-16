import React from 'react'
import './Chat.css'
import img1 from './photo.jpg'
import { Paperclip, CameraReels, Mic, Image} from 'react-bootstrap-icons'


function Chat() {
  return (
    <div className='chat'>

      <div className='chat_header'>
        <img src={img1} id="rounded-circle_chat" className="rounded-circle" alt='user' />
        <div className='header_info'>
          <div id='header_info_name' >Tomer</div>
          <p>Last seen at....</p>
        </div>
      </div>
      <div className='chat_body'>
        <p className={`message ${true && 'recive_message'}`}>
          message..
          <span className='message_time'>8:00am</span>
        </p>
      </div>

      <div className='chat_input'>
        <div className="btn-group dropup">
          <button id="Paperclip_button" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <Paperclip />
          </button>
          <ul className="dropdown-menu">
            <div className='buttons_optaions'>
              <button>&nbsp;<CameraReels />&nbsp;</button>
              <button>&nbsp;<Mic />&nbsp;</button>
              <button>&nbsp;<Image />&nbsp;</button>
            </div>
          </ul>
        </div>

        <form>
          <input placeholder='Type a Message' />
          <button type='submit'>Send</button>
        </form>
      </div>

    </div>
  )
}
export default Chat
import React, { useState } from 'react'
import './Chat.css'
import img1 from './photo.jpg'
import { Paperclip, CameraReels, Mic, Image } from 'react-bootstrap-icons'
import ModalRecord from './ModalRecord'
import dataBase from './DataBase'


function Chat({ contact }) {
  const [input, setInput] = useState("")
  const [activeRecord, setActiveRecord] = useState(() => false)
  const [audioMessage, setAudioMessage] = useState("")

  const getTime = () => {
    let today = new Date();
    let hour = String(today.getHours()).padStart(2, '0');
    let min = String(today.getMinutes() + 1).padStart(2, '0');
    return hour + ":" + min
  }

  const showMessage = dataBase.usersDataBase.get(contact).userChats.map((msg) => { return msg })

  const newMessage = (e) => {
    e.preventDefault();
    if(!activeRecord) {
      if (input.length > 0) {
    dataBase.usersDataBase.get(contact).userChats.push((<p className={`message ${true && 'recive_message'}`}>
    {input}
    <span className='message_time'>{getTime()}</span></p>))
    }}
    else{
      dataBase.usersDataBase.get(contact).userChats.push(<p className={`message ${true && 'recive_message'}`}>
      {audioMessage}
      <br/>
      {input}
      <span className='message_time'>{getTime()}</span></p>)
    }
    setActiveRecord(false)
    setInput("")
  }
    
  return (
    <div className='chat'>
      <div className='chat_header'>
        <img src={img1} id="rounded-circle_chat" className="rounded-circle" alt='user' />
        <div className='header_info'>
          <div id='header_info_name'> {dataBase.usersDataBase.get(contact).displayName}</div>
          <p>Last seen at....</p>
        </div>
      </div>
      <div className='chat_body'>
        {showMessage}
      </div>

      <div className='chat_input'>
        <div className="btn-group dropup">
          <button id="Paperclip_button" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
            <Paperclip />
          </button>
          <ul className="dropdown-menu">
            <div className='buttons_optaions'>
              <button>&nbsp;<CameraReels />&nbsp;</button>
              <button onClick={() => setActiveRecord(true)}>&nbsp;<Mic />&nbsp;</button>
              <button>&nbsp;<Image />&nbsp;</button>
            </div>
          </ul>
        </div>

        <form>
          <input placeholder='Type a Message' value={input} onChange={(e) => setInput(e.target.value)} />
          <button type='submit' onClick={newMessage}>Send</button>
        </form>
      </div>
      {activeRecord && <ModalRecord modalSetter={setActiveRecord} messageSetter={setAudioMessage} time={getTime} />}
    </div>
  )
}
export default Chat
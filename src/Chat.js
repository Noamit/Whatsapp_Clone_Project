import React, { useState } from 'react'
import './Chat.css'
import { Paperclip, CameraReels, Mic, Image } from 'react-bootstrap-icons'
import ModalRecord from './ModalRecord'
import dataBase from './DataBase'
import ModalImage from './ModalImage'


function Chat({ contact }) {
  const [input, setInput] = useState("")
  const [activeRecord, setActiveRecord] = useState(false)
  const [audioMessage, setAudioMessage] = useState("")
  const [img, setImg] = useState(null)
  const [imageMsg, setImageMsg] = useState(false)

  const getTime = () => {
    let today = new Date();
    let hour = String(today.getHours()).padStart(2, '0');
    let min = String(today.getMinutes() + 1).padStart(2, '0');
    return hour + ":" + min
  }

  const showMessage = dataBase.usersDataBase.get(contact).userChats.map((msg) => { return msg })

  const newMessage = (e) => {
    e.preventDefault();
    if (activeRecord) {
      dataBase.usersDataBase.get(contact).userChats.push(<p className={`message ${true && 'recive_message'}`}>
        {audioMessage}
        <br />
        {input}
        <span className='message_time'>{getTime()}</span></p>)
        setActiveRecord(false)
    }
    else if(imageMsg) {
      dataBase.usersDataBase.get(contact).userChats.push(<p className={`message ${true && 'recive_message'}`}>
        <img className='send_img' src={img} alt='' />
        <br />
        {input}
        <span className='message_time'>{getTime()}</span></p>)
        setImageMsg(false)
    }
    else if(false){

    }
    else if(input.length > 0){
      dataBase.usersDataBase.get(contact).userChats.push(<p className={`message ${true && 'recive_message'}`}>
        {input}
        <span className='message_time'>{getTime()}</span></p>)
    } 
    setInput("")
  }


  const getImg = (e) => {
    if (e.target.files) {
      if (e.target.files[0]) {
        setImg(URL.createObjectURL(e.target.files[0]))
        setImageMsg(true)
      }
    }
  }

  return (
    <div className='chat'>
      <div className='chat_header'>
        <img src={dataBase.usersDataBase.get(contact).img} id="rounded-circle_chat" className="rounded-circle" alt='user' />
        <div className='header_info'>
          <div id='header_info_name'> {dataBase.usersDataBase.get(contact).displayName}</div>
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
              <button onClick={()=>setActiveRecord(true)}>&nbsp;<Mic />&nbsp;</button>
              <button>
                <label htmlFor="img">&nbsp;<Image />&nbsp;</label>
                <input id="img" type="file" accept="image/png, image/jpeg" hidden onChange={getImg} />
              </button>
            </div>
          </ul>
        </div>

        <form>
          <input placeholder='Type a Message' value={input} onChange={(e) => setInput(e.target.value)} />
          <button type='submit' onClick={newMessage}>Send</button>
        </form>
      </div>
      {activeRecord && <ModalRecord modalSetter={setActiveRecord} messageSetter={setAudioMessage} time={getTime} />}
      {imageMsg && <ModalImage modalSetter={setImageMsg} image={img}/>}
    </div>
  )
}
export default Chat
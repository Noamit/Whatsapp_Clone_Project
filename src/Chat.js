import React, { useState } from 'react'
import './Chat.css'
import { Paperclip, CameraReels, Mic, Image } from 'react-bootstrap-icons'
import ModalRecord from './ModalRecord'
import dataBase from './DataBase'
import ModalImage from './ModalImage'


function Chat({ contact, setterLastMsgInArray, lastMsgInArray }) {
  const [input, setInput] = useState("")
  const [activeRecord, setActiveRecord] = useState(false)
  const [audioMessage, setAudioMessage] = useState("")
  const [file, setFile] = useState(() => null)
  const [fileMsg, setFileMsg] = useState(() => false)
  const [fileKind, setFileKind] = useState(() => '')
  const [fileURL, setFileURL] = useState(() => null)

  const [imageVal, setImageVal] = useState('')
  const [videoVal, setVideoVal] = useState('')

  const getTime = () => {
    let today = new Date();
    let hour = String(today.getHours()).padStart(2, '0');
    let min = String(today.getMinutes()).padStart(2, '0');
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

      dataBase.usersDataBase.get(contact).lastMsg = "VOICE MESSAGE";
      dataBase.usersDataBase.get(contact).lastMsgTime = getTime();
    }
    else if (fileMsg) {
      dataBase.usersDataBase.get(contact).userChats.push(<p className={`message ${true && 'recive_message'}`}>
        {file}
        <br />
        {input}
        <span className='message_time'>{getTime()}</span></p>)

      dataBase.usersDataBase.get(contact).lastMsg = "IMAGE";
      dataBase.usersDataBase.get(contact).lastMsgTime = getTime();
    }

    else if (input.length > 0) {
      dataBase.usersDataBase.get(contact).userChats.push(<p className={`message ${true && 'recive_message'}`}>
        {input}
        <span className='message_time'>{getTime()}</span></p>)

      dataBase.usersDataBase.get(contact).lastMsg = input;
      dataBase.usersDataBase.get(contact).lastMsgTime = getTime();
    }
    
    setFileMsg(() => false)
    setFileKind(() => '')
    setFileURL(() => null)
    setFile(() => null)
    setActiveRecord(false)
    setInput("")
    setterLastMsgInArray(!lastMsgInArray);
  }


  const getFile = (e, kind) => {
    if (e.target.files) {
      if (e.target.files[0]) {
        setFileMsg(true)
        setFileKind(kind)
        const URLfile = URL.createObjectURL(e.target.files[0])
        if (kind === "Video") {
          setFile(<video controls="controls" src={URLfile} type="video/*" className='send_img' alt='' />)
        }
        else {
          setFile(<img src={URLfile} className='send_img' alt='' />)
        }
        setFileURL(URLfile)
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
              <button onClick={() => setVideoVal('')}>
                <label htmlFor="video">&nbsp;<CameraReels />&nbsp;</label>
                <input id="video" type="file" accept="video/*" hidden value={videoVal} onChange={(e) => getFile(e, "Video")} />
              </button>

              <button onClick={() => setActiveRecord(true)}>&nbsp;<Mic />&nbsp;</button>

              <button onClick={() => setImageVal('')}>
                <label htmlFor="img">&nbsp;<Image />&nbsp;</label>
                <input id="img" type="file" accept="image/png, image/jpeg" hidden value={imageVal} onChange={(e) => {getFile(e, "Image"); console.log("change") }} />
              </button >
            </div>
          </ul>
        </div>

        <form>
          <input placeholder='Type a Message' value={input} onChange={(e) => setInput(e.target.value)} />
          <button type='submit' onClick={newMessage}>Send</button>
        </form>
      </div>
      {activeRecord && <ModalRecord modalSetter={setActiveRecord} messageSetter={setAudioMessage} time={getTime} />}
      {fileMsg && <ModalImage modalSetter={setFileMsg} fileToSend={fileURL} kind={fileKind} />}    </div>
  )
}
export default Chat
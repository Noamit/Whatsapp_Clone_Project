import React, { useState } from 'react'
import './Sidebar.css'
import { PersonPlus } from 'react-bootstrap-icons'
import SingleSideChat from './SingleSideChat'
import SideBarModal from './SideBarModal'
import ContactErrorModal from './ContactErrorModal';
import dataBase from './DataBase'

function Sidebar({ user, chatWith }) {

  const [chatsArray, setChatsArray] = useState([]);
  const [openModel, setOpenModel] = useState(false);

  const [openErrorModel, setOpenErrorModel] = useState(() => false);
  const [errorDescription, seterrorDescription] = useState('no');

  const showChats = chatsArray.map((username) => { return <SingleSideChat name={username} chatWithX = {chatWith}/> })

  return (
    <>
      <div className='sideBarModal'>
        {openModel && <SideBarModal close_modal={setOpenModel} setterContactsArray={setChatsArray} contactsArray={chatsArray} 
        errorModalSetter = {setOpenErrorModel} errorMessage = {seterrorDescription} />}
      </div>
      <div className='sideBarModal'>
        {openErrorModel && <ContactErrorModal close_modal_error={setOpenErrorModel} message={errorDescription} />}
      </div>
      <div className='sidebar'>
        <div className='sidebar_header'>
          <img src={dataBase.usersDataBase.get(user).img} className="rounded-circle" alt="user" />
          <div id="userName">{dataBase.usersDataBase.get(user).displayName}</div>
          <button id='presonPlus_button' onClick={() => { setOpenModel(true); }}>
            <PersonPlus />
          </button>
        </div>
        <div className='sidebar_chats'>
          {showChats}
        </div>
      </div>
    </>
  )
}

export default Sidebar
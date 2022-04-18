import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link, PersonPlus } from 'react-bootstrap-icons'
import img1 from './img1.jpg'
import SingleSideChat from './SingleSideChat'
import SideBarModal from './SideBarModal'

function Sidebar({user}) {

  const [chatsArray, setChatsArray] = useState([]);
  const [openModel, setOpenModel] = useState(false);

  const showChats = chatsArray.map((username)=> {return <SingleSideChat name = {username}/>})

  return (
    <>
    <div className='sideBarModal'>
    {openModel && <SideBarModal close_modal={setOpenModel} setterContactsArray = {setChatsArray} contactsArray ={chatsArray} />}
    </div>

    <div className='sidebar'>
      <div className='sidebar_header'>
        <img src={img1} className="rounded-circle" alt="user" />
        <div id="userName">{user}</div>
        <button id='presonPlus_button' onClick={() => {setOpenModel(true); }}>
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
import React, { useState } from 'react'
import './Sidebar.css'
import { Link, PersonPlus } from 'react-bootstrap-icons'
import img1 from './img1.jpg'
import SingleSideChat from './SingleSideChat'
import SideBarModal from './SideBarModal'
import dataBase from './DataBase'

function Sidebar({user, ifOnChat, contantName}) {


  const [chatsArray, setChatsArray] = useState([]);

  const [openModel, setOpenModel] = useState(false);

  return (
    <>
    <div className='sideBarModal'>
    {openModel && <SideBarModal close_modal={setOpenModel} />}
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
        {/* <SingleSideChat name={dataBase.usersDataBase.get(contantName).displayName} lastMessage={"love you love you love you love you love you love youlove you"} lastseen="11:54" ifOnChat = {ifOnChat}/>
        <SingleSideChat name={dataBase.usersDataBase.get(contantName).displayName} lastMessage={"hello"} lastseen="11:54" ifOnChat = {ifOnChat}/> */}
      </div>
    </div>
    </>
   
  )
}

export default Sidebar
import React, { useState } from 'react'
import './Sidebar.css'
import { PersonPlus } from 'react-bootstrap-icons'
import img1 from './img1.jpg'
import SingleSideChat from './SingleSideChat'
import SideBarModal from './SideBarModal'

function Sidebar({user}) {

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
        <SingleSideChat name="tomer" lastMessage={"love you"} lastseen="03:54" />
        <SingleSideChat name="tomer" lastMessage={"love you love you love you love you love you love youlove you"} lastseen="11:54" />
        <SingleSideChat name="tomer" lastMessage={"love youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"} lastseen="03:54" />
        <SingleSideChat name="tomer" lastMessage={"love youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"} lastseen="03:54" />
        <SingleSideChat name="tomer" lastMessage={"loveyouuuuuhuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu "} lastseen="03:54" />
        <SingleSideChat name="tomer" lastMessage={"loveyouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu "} lastseen="03:54" />
        <SingleSideChat name="tomer" lastMessage={"noa "} lastseen="03:54" />
      </div>
      
    </div>
    </>
   
  )
}

export default Sidebar
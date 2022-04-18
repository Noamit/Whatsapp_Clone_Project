import React, { useState } from 'react'
import Chat from './Chat';
import Sidebar from './Sidebar';
import './Appbody.css'
import EmptyChat from './EmptyChat';

function Appbody({ userChat }) {

  const [onChat, setOnChat] = useState(false);
  const [openChat, setOpenChat] = useState('');

  const renderCharOrEmtyChat = () => {
    if (onChat && openChat != '') {
      return (<Chat contant={openChat} />);
    } else {
      return (<EmptyChat />);
    }
  }

  return (
    <div className="app">
      <div className="app_body">
        {/* <Sidebar user={userChat} ifOnChat={setOnChat} contantName={setOpenChat} /> */}

        <Sidebar user={userChat} ifOnChat={setOnChat} contantName='tomer' />
        {renderCharOrEmtyChat()}
      </div>
    </div>
  )
}

export default Appbody;
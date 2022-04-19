import React, { useState } from 'react'
import Chat from './Chat';
import Sidebar from './Sidebar';
import './Appbody.css'
import EmptyChat from './EmptyChat';

function Appbody({userChat}) {

  const [openChatWith, setOpenChatWith] = useState('');

  const renderCharOrEmtyChat = () => {
    if (openChatWith != '') {
      return (<Chat contact={openChatWith} />);
    } else {
      return (<EmptyChat />);
    }
  }

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar user={userChat} chatWith={setOpenChatWith}  />
        {renderCharOrEmtyChat()}
      </div>
    </div>
  )
}

export default Appbody;
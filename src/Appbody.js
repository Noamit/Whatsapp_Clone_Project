import React from 'react'
import Chat from './Chat';
import Sidebar from './Sidebar';
import './Appbody.css'


function Appbody({userChat}) {

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar userName={userChat} />
        <Chat />
      </div>
    </div>
  )
}

export default Appbody;
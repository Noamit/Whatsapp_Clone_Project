import React from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Appbody.css'

function Appbody() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>

    </div>
  )
}

export default Appbody;
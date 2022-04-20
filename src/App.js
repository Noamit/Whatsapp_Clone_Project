import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register'
import Appbody from './Appbody'
import './Modals/Modal.css'

function App() {

  const [newUser, setNewUser] = useState('')

  //using routes to nevigate without re-fresh the page
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login userSetter={setNewUser}/>}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/chat' element={<Appbody userChat={newUser}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}
export default App;

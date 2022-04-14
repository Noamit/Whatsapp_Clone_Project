import React, { BrowserRouter, Routes, Route } from "react";
import Login from "./Login";
import './Login.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;

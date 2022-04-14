import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register'
import Chat from './Chat'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/chat' element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}
export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register'
import Appbody from './Appbody'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/chat' element={<Appbody />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}
export default App;

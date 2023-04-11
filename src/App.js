
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Auth/LogIn';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Component/Page/Home';
import NavBar from './Component/Header/NavBar';
import MailEditor from './Component/Editor/MailEditor';
import Inbox from './Component/Editor/Inbox';
import Sentmail from './Component/Editor/Sentmail';
import MailBody from './Component/UI/MailBody';

function App() {
  let token = window.localStorage.getItem('token')
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/composemail' element={<MailEditor/>}/>
      <Route path='/inbox' element={<Inbox/>}/>
      <Route path='/sentmail' element={<Sentmail/>}/>
      <Route path='/mailBody/:id' element={<MailBody/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

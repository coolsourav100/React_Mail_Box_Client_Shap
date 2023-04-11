
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Auth/LogIn';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Component/Page/Home';
import NavBar from './Component/Header/NavBar';
import MailEditor from './Component/Editor/MailEditor';
import Inbox from './Component/Editor/Inbox';
import Sentmail from './Component/Editor/Sentmail';
import MailBody from './Component/UI/MailBody';
import MailBodySent from './Component/UI/MailBodySent';
import { useSelector } from 'react-redux';

function App() {
  let token = window.localStorage.getItem('token')
  const userData = useSelector(state=> state.user)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      { !userData.isLoggedIn && <Route path='/' element={<Login/>}/>}
      {userData.isLoggedIn && <Route path='/home' element={<Home/>}/>}
      {userData.isLoggedIn && <Route path='/composemail' element={<MailEditor/>}/>}
      {userData.isLoggedIn && <Route path='/inbox' element={<Inbox/>}/>}
      {userData.isLoggedIn && <Route path='/sentmail' element={<Sentmail/>}/>}
      {userData.isLoggedIn && <Route path='/mailBody/:id' element={<MailBody/>}/>}
      {userData.isLoggedIn && <Route path='/mailBodySent/:id' element={<MailBodySent/>}/>}
      {!userData.isLoggedIn && <Route path='*' element={<Login/>}/>}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

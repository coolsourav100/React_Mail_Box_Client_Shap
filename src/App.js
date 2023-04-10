
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Auth/LogIn';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Component/Page/Home';

function App() {
  let token = window.localStorage.getItem('token')
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

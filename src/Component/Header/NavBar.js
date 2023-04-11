import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userAction } from '../Store/User-Slice'

const NavBar = () => {
  const user = useSelector(state=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const clickHandler =(e)=>{
    e.preventDefault();
dispatch(userAction.localIdUpdater(''))
dispatch(userAction.loggedInUpdater())
dispatch(userAction.tokenUpdater(''))
navigate('/')
  }
  return (
   <> { user.isLoggedIn &&
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mail Box</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to='/home'><p class="nav-link">Home</p></Link>
      </li>
      <li class="nav-item">
      <Link to='/composemail'><p class="nav-link">Compose Mail</p></Link>
      </li>
      <li class="nav-item">
      <Link to='/sentmail'><p class="nav-link">Sent Mail</p></Link>
      </li>
      <li class="nav-item">
        <Link to='inbox'><p class="nav-link">Inbox</p></Link>
      </li>
    </ul>
  </div>
    <div className='d-flex justify-content-end'>
<Link><button className='btn btn-outline-dark' onClick={clickHandler}>LogOut</button></Link>
    </div>
</nav>
}
</>
  )
}

export default NavBar
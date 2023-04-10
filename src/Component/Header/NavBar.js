import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
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
    <form class="form-inline my-2 my-lg-0">
     
    </form>
  </div>
</nav>
  )
}

export default NavBar
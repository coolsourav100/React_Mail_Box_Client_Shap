import React from 'react'
import MailEditor from '../Editor/MailEditor'
import { useSelector } from 'react-redux'

const Home = () => {
    const userData = useSelector(state=>state.user)
    console.log(userData)
    // console.log(first)
  return (
    <div>
        <h1 className='display-1'>Welcom to The Mail Box</h1>
    </div>
  )
}

export default Home
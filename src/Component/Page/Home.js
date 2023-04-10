import React from 'react'
import MailEditor from '../Editor/MailEditor'
import { useSelector } from 'react-redux'

const Home = () => {
    const userData = useSelector(state=>state.user)
    console.log(userData)
    // console.log(first)
  return (
    <div>
        <MailEditor/>
    </div>
  )
}

export default Home
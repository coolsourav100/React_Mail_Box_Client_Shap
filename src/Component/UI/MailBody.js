import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const MailBody = () => {
    const param = useParams().id
    const userData = useSelector(state=>state.user)
    useEffect(()=>{
        (async()=>{
        await fetch(`https://etshapreact-default-rtdb.asia-southeast1.firebasedatabase.app/${userData.localId}/mailRecived/${param}.json`,{
            method:'PATCH',
            body:JSON.stringify({
                sentTo:userData.mailDataRecived[param].sentTo,
                subject:userData.mailDataRecived[param].subject,
                text:userData.mailDataRecived[param].text,
                time:userData.mailDataRecived[param].time,
                read:true
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                return res.json()
              }else{
                return res.json().then((data)=>window.alert(data.error.message))
              }
        })
        .then(res=>console.log(res))
        .catch(err=>console.log('Error'+err))
    })()
},[])
  return (
    <div className='container'>
        
        <div className="card text-center">
  <div className="card-header">
    Mail
  </div>
  <div className="card-body">
    <h5 className="card-title">{`Mail From : ${userData.mailDataRecived[param].sentTo}`}</h5>
    <p className="card-subtitle mb-2 text-muted">{userData.mailDataRecived[param].subject}</p>
    <p className="card-text">{userData.mailDataRecived[param].text}</p>
    
  </div>
  <div className="card-footer text-muted">
  {` Time - ${userData.mailDataRecived[param].time}`}
  </div>
</div>
    </div>
  )
}

export default MailBody
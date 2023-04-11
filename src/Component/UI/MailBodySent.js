
import React ,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const MailBodySent = () => {
    const param = useParams().id
    const userData = useSelector(state=>state.user)
    useEffect(()=>{
        (async()=>{
        await fetch(`https://etshapreact-default-rtdb.asia-southeast1.firebasedatabase.app/${userData.localId}/mailSent/${param}.json`).then((res)=>{
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
        
        <div className="card text-center bg-success p-2 text-dark bg-opacity-10">
  <div className="card-header">
   Sent Mails
  </div>
  <div className="card-body">
    <h5 className="card-title">{`Mail To : ${userData.mailDataSent[param].sentTo}`}</h5>
    <p className="card-subtitle mb-2 text-muted">{userData.mailDataSent[param].subject}</p>
    <p className="card-text bg-success p-2 text-dark bg-opacity-25">{userData.mailDataSent[param].text}</p>
    
  </div>
  <div className="card-footer text-muted">
  {` Time - ${userData.mailDataSent[param].time}`}
  </div>
</div>
    </div>
  )
}

export default MailBodySent
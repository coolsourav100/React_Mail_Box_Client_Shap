import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../Store/User-Slice'
import { Link } from 'react-router-dom'
import classes from './Inbox.module.css'
import DotIcon from '../UI/DotIcon'
import Deletebutton from '../UI/Deletebutton'

const Inbox = () => {
  
    const dispatch = useDispatch()
  const userData = useSelector(state=>state.user)
  let badge = 0
  
   
    
		
       setTimeout(async()=>{await fetch(`https://etshapreact-default-rtdb.asia-southeast1.firebasedatabase.app/${userData.localId}/mailRecived.json`).then((res)=>{
        if(res.ok){
            return res.json()
          }else{
            return res.json().then((data)=>window.alert(data.error.message))}})
    .then(res=>dispatch(userAction.mailDataRecivedUpdater(res)))
    .catch(err=>console.log(err))},2000)
    
   
    
	let key
	if(userData.mailDataRecived){
	key = Object.keys(userData.mailDataRecived)
	key.map((item)=>{
		if(!userData.mailDataRecived[item].read){
			badge=badge+1
		}})
	}

  return (
    <div className='container border border-light rounded'>
    <h1 className='d-flex justify-content-center'>Inbox</h1>
    <div className="col-md-9">
						<div className="row">
							<div className="col-sm-6">
							<span class="btn btn-primary"><span class="badge badge-dark bg-danger">{badge}</span>
  <span class="sr-only">unread messages</span>
</span>
							</div>

							<div className="col-md-6 search-form">
								<form action="#" className="text-right">
									<div className="input-group">
										<input type="text" className="form-control input-sm" placeholder="Search"/>
										<span className="input-group-btn">
      </span>
									</div>			 
								</form>
							</div>
						</div>
						
						<div className="padding"></div>
						<div className="table-responsive">
							<table className="table">
								<tbody>
						{key?.map((item)=>{

						 return (
									<tr className={classes.trow}>
									<td className="action">{!userData.mailDataRecived[item].read && <DotIcon/>}</td>
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">{userData.mailDataRecived[item].sentTo}</p></td>
									<td ><p href="#"><Link to={`/mailBody/${item}`}>{userData.mailDataRecived[item].subject}</Link></p></td>
									<td ><span href="#"><Link to={`/mailBody/${item}`}>{userData.mailDataRecived[item].text}</Link></span></td>
									<td className="time">{userData.mailDataRecived[item].time}</td>
									<td className="action"><Deletebutton item={item}/></td>
								</tr>
								
						 )
								})
								}
									</tbody>
								
							</table>
						</div>

												
					</div>
        
    </div>
  )
}

export default Inbox
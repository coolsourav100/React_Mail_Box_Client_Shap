import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../Store/User-Slice'
import { Link } from 'react-router-dom'
import classes from './Inbox.module.css'
import DotIcon from '../UI/DotIcon'

const Inbox = () => {
  
    const dispatch = useDispatch()
  const userData = useSelector(state=>state.user)
  let badge = 0
  console.log(userData)
   useEffect(()=>{
    (async()=>{
      await fetch(`https://etshapreact-default-rtdb.asia-southeast1.firebasedatabase.app/${userData.localId}/mail.json`).then((res)=>{
        if(res.ok){
            return res.json()
          }else{
            return res.json().then((data)=>window.alert(data.error.message))}})
    .then(res=>dispatch(userAction.mailDataUpdater(res)))
    .catch(err=>console.log(err))
    })()
    return ()=>{}
    },[])
	let key
	if(userData.mailData){
	key = Object.keys(userData.mailData)
	key.map((item)=>{
		if(!userData.mailData[item].read){
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
      <button type="submit" name="search" className="btn btn-primary"><i className="fa fa-search"></i></button></span>
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
									<td className="action">{!userData.mailData[item].read && <DotIcon/>}</td>
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">{userData.mailData[item].sentTo}</p></td>
									<td ><p href="#"><Link to={`/mailBody/${item}`}>{userData.mailData[item].subject}</Link></p></td>
									<td ><span href="#"><Link to={`/mailBody/${item}`}>{userData.mailData[item].text}</Link></span></td>
									<td className="time">{userData.mailData[item].time}</td>
									
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
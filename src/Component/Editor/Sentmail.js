import React, { Children, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../Store/User-Slice'
import { Link } from 'react-router-dom'
import classes from'./Sentmail.module.css'


const Sentmail = () => {
	const dispatch = useDispatch()
  const userData = useSelector(state=>state.user)
  
   useEffect(()=>{
    (async()=>{
      await fetch(`https://etshapreact-default-rtdb.asia-southeast1.firebasedatabase.app/${userData.localId}/mailSent.json`).then((res)=>{
        if(res.ok){
            return res.json()
          }else{
            return res.json().then((data)=>window.alert(data.error.message))}})
    .then(res=>dispatch(userAction.mailDataSentUpdater(res)))
    .catch(err=>console.log(err))
    })()
    return ()=>{}
    },[])
	let key
	if(userData.mailDataSent){
	key = Object.keys(userData.mailDataSent)
	}
  return (
    <div className='container bg-light border border-light rounded'>
    <h1 className='d-flex justify-content-center'>Sent Mail</h1>
    <div className="col-md-9">
						<div className="row">
							<div className="col-sm-6">
								<label  className="">
									<div className="icheckbox_square-blue" ><input type="checkbox" id="check-all" className="icheck"/></div>
								</label>
								<div className="btn-group">
									<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
										Action <span className="caret"></span>
									</button>
									<ul className="dropdown-menu" role="menu">
										<li><p href="#">Mark as read</p></li>
										<li><p href="#">Mark as unread</p></li>
										<li><p href="#">Mark as important</p></li>
										<li className="divider"></li>
										<li><p href="#">Report spam</p></li>
									</ul>
								</div>
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
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">{userData.mailDataSent[item].sentTo}</p></td>
									<td className="subject"><p href="#"><Link to={`/mailBodySent/${item}`}>{userData.mailDataSent[item].subject}</Link>Link</p></td>
									<td className="subject"><p href="#"><Link to={`/mailBodySent/${item}`}>{userData.mailDataSent[item].text}</Link></p></td>
									<td className="time">{userData.mailDataSent[item].time}</td>
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

export default Sentmail
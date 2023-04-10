import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Sentmail = () => {
  const userData = useSelector(state=>state.user.mailData)
  
   useEffect(()=>{
    (async()=>{
      await fetch(`https://etshapreact-default-rtdb.asia-southeast1.firebasedatabase.app/${userData.localId}/sent.json`,{
        
        
        headers:{
            'Content-Type': 'application/json'
        }
      }
    ).then((res)=>{
        if(res.ok){
            return res.json()
          }else{
            return res.json().then((data)=>window.alert(data.error.message))
          }
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    })()

    return ()=>{}
    },[])
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
								<tbody><tr>
									<td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr>
									<td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr className="read">
<td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star"></i></td>
									<td className="action"><i className="fa fa-bookmark"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr>
									<td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr className="read">
									<td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr className="read">
                                    <td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr>
                                    <td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr>
									<td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star-o"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr className="read">
									<td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star"></i></td>
									<td className="action"><i className="fa fa-bookmark"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
								<tr>
									<td className="action"><input type="checkbox" /></td>
									<td className="action"><i className="fa fa-star"></i></td>
									<td className="action"><i className="fa fa-bookmark-o"></i></td>
									<td className="name"><p href="#">Larry Gardner</p></td>
									<td className="subject"><p href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p></td>
									<td className="time">08:30 PM</td>
								</tr>
							</tbody></table>
						</div>

												
					</div>
        
    </div>
  )
}

export default Sentmail
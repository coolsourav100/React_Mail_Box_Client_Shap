import React, { useState } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector } from 'react-redux';

const MailEditor = () => {
    const userData = useSelector(state=>state.user)
    console.log(userData)
    const _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState);  // RawDraftContentState JSON
  const [contentState, setContentState] = useState(raw); // ContentState JSON
//   console.log(contentState.blocks[0].text)
  const [toSender , setTosender] = useState('');
  const [ subject , setSubject] = useState('')
    
 const sendHandler =async(e)=>{
    e.preventDefault();
    await fetch(`https://etshapreact-default-rtdb.asia-southeast1.firebasedatabase.app/${userData.localId}/sent.json`,{
        method:'POST',
        body:JSON.stringify({
            sentTo:toSender,
            subject:subject,
            text:contentState.blocks[0].text
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
    .catch(err=>console.log(err))
    
 }



  return (
    <div className='container'>
        <div className="col-lg-8 messege-right p-3 border">
<div className="row m-0">
<div className="col-lg-12 bg-dark text-white">
<div className="row">
<div className="col-lg-6">
<h1 className="pt-2 d-flex justify-content-center">Compose Mail</h1>
</div>
<div className="col-lg-6 pt-2 message-box-icon">
<span className="pull-right">
<i className="fa fa-minus" aria-hidden="true"></i>
<i className="fa fa-arrows-alt" aria-hidden="true"></i>
<i className="fa fa-times" aria-hidden="true"></i>
</span>
</div>
</div>
</div>
<div className="col-lg-12 p-0 message-box-input">
<form>
<div className="form-group">
<input type="email" className="form-control" value={toSender} onChange={(e)=>setTosender(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="To" />
<input type="email" className="form-control" value={subject} onChange={(e)=>setSubject(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject"/>
<Editor
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        
      />
</div>
</form>
</div>
<div className="co-lg-12 message-box-last-content p-2">
<button href="#" className="btn btn-primary btn-sm pl-3 pr-3" onClick={sendHandler}>SEND</button>
<span>
<i className="fa fa-paperclip" aria-hidden="true"></i>
<i className="fa fa-file" aria-hidden="true"></i>
<i className="fa fa-picture-o" aria-hidden="true"></i>
<i className="fa fa-link" aria-hidden="true"></i>
<i className="fa fa-smile-o" aria-hidden="true"></i>
</span>
<span className="pull-right">
<i className="fa fa-trash-o" aria-hidden="true"></i>
</span>
</div>
</div>
</div>
</div>


    
  )
}

export default MailEditor
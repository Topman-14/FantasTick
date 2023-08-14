import {React, useState} from 'react'
import { SlTrash, SlPencil } from "react-icons/sl"
import { BsCheckLg } from "react-icons/bs"
import Alert from './Alert'

export default function Item({ item }) {
  const [response, setResponse] = useState({isRecieved: false});
  const deleteItem = async ()=>{
    const res = await fetch(`http://localhost:4000/api/items/${item._id}`, {
        method: 'DELETE'
    })
    const json = await res.json();
    if (res.ok){
      setResponse({
        isRecieved: true,
        text:"Item deleted successfully"
      })
      setTimeout(()=>{setResponse({isRecieved:false})}, 2000)
    }
    if(!res.ok){
      setResponse({
        isRecieved: true,
        text:json.error,
        type:"error"
      })
      setTimeout(()=>{setResponse({isRecieved:false})}, 2000)
    }
  }
  return (
    <div className="item_body">
      {response.isRecieved && <Alert type={response.type} text={response.text}/>}
      <div className="item_text">
        <p className="item_title">{item.title}</p>
        <p className="item_desc">{item.desc}</p>
        <p className="time_stamp">{item.createdAt}</p>
      </div>
      <div className="btns">
        <div>
          <button title="Tick this item" className={`tick_btn ${item.ischecked? "ticked" : ""}`}><BsCheckLg /></button>
        </div>
        <div className="other_btns">
          <button title="Edit" className="edit_btn"><SlPencil /></button>
          <button title="Delete" className="delete_btn" onClick={deleteItem}><SlTrash /></button>
        </div>
      </div>
    </div>
  )
}

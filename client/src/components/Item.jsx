import {React, useContext, useState} from 'react'
import { SlTrash, SlPencil } from "react-icons/sl"
import { BsCheckLg } from "react-icons/bs"
import { AlertContext } from '../context/alertContext';
import { useItemsContext } from '../hooks/useItemsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import UpdateForm from './UpdateForm';


export default function Item({ item }) {

  const {dispatch} = useItemsContext();
  const {showAlert} = useContext(AlertContext);

  const deleteItem = async ()=>{
    const res = await fetch(`http://localhost:4000/api/items/${item._id}`, {
        method: 'DELETE'
    })
    const json = await res.json();

    if (res.ok){
      showAlert("", "Item deleted successfully")
      dispatch({type: 'DELETE_ITEM', payload: json})
    }
    if(!res.ok){
      showAlert("error", json.error)
    }
  }
  const [isEditClicked, setIsEditClicked] = useState(false)

  const openForm = ()=>{setIsEditClicked(true)}
  const closeForm = ()=>{setIsEditClicked(false)}

  return (
    <div className="item_body">
      {isEditClicked && <UpdateForm  title={item.title} desc={item.desc} ischecked={item.ischecked} id={item._id}handleClose={closeForm}/>}
      <div className="item_text">
        <p className="item_title">{item.title}</p>
        <p className="item_desc">{item.desc}</p>
        <p className="time_stamp">{formatDistanceToNow(new Date(item.createdAt), {addSuffix: true})}</p>
      </div>
      <div className="btns">
        <div>
          <button title="Tick this item" className={`tick_btn ${item.ischecked? "ticked" : ""}`}><BsCheckLg /></button>
        </div>
        <div className="other_btns">
          <button title="Edit" className="edit_btn" onClick={openForm}><SlPencil /></button>
          <button title="Delete" className="delete_btn" onClick={deleteItem}><SlTrash /></button>
        </div>
      </div>
    </div>
  )
}

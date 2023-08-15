import {React, useContext} from 'react'
import { SlTrash, SlPencil } from "react-icons/sl"
import { BsCheckLg } from "react-icons/bs"
import { AlertContext } from '../context/alertContext';
import { useItemsContext } from '../hooks/useItemsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


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
  return (
    <div className="item_body">
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
          <button title="Edit" className="edit_btn"><SlPencil /></button>
          <button title="Delete" className="delete_btn" onClick={deleteItem}><SlTrash /></button>
        </div>
      </div>
    </div>
  )
}

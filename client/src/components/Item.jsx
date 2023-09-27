import {React, useContext, useState} from 'react'
import { SlTrash, SlPencil } from "react-icons/sl"
import { BsCheckLg } from "react-icons/bs"
import { AlertContext } from '../context/AlertContext';
import { useItemsContext } from '../hooks/useItemsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import UpdateForm from './UpdateForm';
import { useAuthContext } from '../hooks/useAuthContext';


export default function Item({ item }) {

  const {dispatch} = useItemsContext();
  const {showAlert} = useContext(AlertContext);
  const { user } = useAuthContext();


  const deleteItem = async ()=>{

    if(user){
      showAlert("loading", "Please wait...")
    }

    const res = await fetch(`https://fantastick-api.vercel.app/api/items/${item._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
      }
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

  const [ischecked, setischecked] = useState(item.ischecked)
  
  const tickItem = async () => {
    
    if(user){
      showAlert("loading", "Please wait...")
    }

    const newIsChecked = ischecked === "true" ? "false" : "true";
  
    try {
      const res = await fetch(`https://fantastick-api.vercel.app/api/items/${item._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ ischecked: newIsChecked }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });
  
      if (!res.ok) {
        const json = await res.json();
        showAlert("error", json.error);
        return;
      }
  
      showAlert("", `Item ${newIsChecked === "true" ? "ticked" : "unticked"}!`);
      dispatch({ type: 'TICK_ITEM', payload: { ...item, ischecked: newIsChecked } });
      setischecked(newIsChecked); // Update the local state
    } catch (error) {
      showAlert("error", "An error occurred while ticking the item.");
    }
  };
  

  const [isEditClicked, setIsEditClicked] = useState(false)

  const openForm = ()=>{setIsEditClicked(true)}
  const closeForm = ()=>{setIsEditClicked(false)}

  return (
    <div className="item_body">
      {isEditClicked && <UpdateForm  title={item.title} desc={item.desc} ischecked={item.ischecked} id={item._id}handleClose={closeForm}/>}
      <div className="item_text">
        <p className="item_title" style={ischecked == "true"?{textDecoration:'line-through', color:'orange'} : {textDecoration:'none', color:"#3c9f0e"}} >{item.title}</p>
        <p className="item_desc">{item.desc}</p>
        <p className="time_stamp">{formatDistanceToNow(new Date(item.createdAt), {addSuffix: true})}</p>
      </div>
      <div className="btns">
        <div>
          <button title="Tick this item" onClick={tickItem} className={`tick_btn ${ischecked == "true"? "ticked" : ""}`}><BsCheckLg /></button>
        </div>
        <div className="other_btns">
          <button title="Edit" className="edit_btn" onClick={openForm}><SlPencil /></button>
          <button title="Delete" className="delete_btn" onClick={deleteItem}><SlTrash /></button>
        </div>
      </div>
    </div>
  )
}

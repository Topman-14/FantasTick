import React from 'react'
import { useState, useContext } from "react"
import { IoClose } from "react-icons/io5";
import { useItemsContext } from '../hooks/useItemsContext';
import { AlertContext } from '../context/alertContext';


export default function NewItemForm(props) {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const {dispatch} = useItemsContext();
    const {showAlert} = useContext(AlertContext);
    const [checked, setChecked] = useState("");
    
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setChecked(false)
        const item = {title, desc, checked}
        const res = await fetch('http://localhost:4000/api/items/', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json();
        if(!res.ok){
            showAlert("error", json.error)
        }
        if(res.ok){
            setTitle('')
            setDesc('')
            showAlert("", "Item added successfully!")
            dispatch({type: 'CREATE_ITEM', payload: json})
            props.handleClick()
        }
    }
  return (
    <div className="form_wrapper">

        <div className="form_closeBtn" onClick={props.handleClick}><IoClose/></div>
        
        <form className='item_form' onSubmit={handleSubmit}>
        
        <h2>Fill the entries to add a new item</h2>

        <div>
            <label htmlFor="title">Title</label>
            <input className="add_item_inputs" type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
        </div>

        <div>
            <label htmlFor="title">Description (Optional)</label>
            <input className="add_item_inputs" type="text" onChange={(e)=>setDesc(e.target.value)} value={desc} />
        </div>

        <button id='form_add_btn'>Add Item</button>

        </form>
    </div>
  )
}

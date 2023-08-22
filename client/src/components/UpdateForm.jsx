import React, { useState, useContext } from 'react'
import { LiaSaveSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { AlertContext } from '../context/alertContext';
import { useItemsContext } from '../hooks/useItemsContext';
import { useAuthContext } from '../hooks/useAuthContext';


const UpdateForm = (props) => {
    const { showAlert } = useContext(AlertContext)
    const [title, setTitle] = useState(props.title)
    const [desc, setDesc] = useState(props.desc)
    const [isChecked] = useState(props.ischecked)
    const {dispatch} = useItemsContext();
    const { user } = useAuthContext();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const item = {title, desc, isChecked}
        const res = await fetch(`http://localhost:4000/api/items/${props.id}`, {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await res.json();
        if(!res.ok){
            showAlert("error", json.error)
            props.handleClose()
        }
        if(res.ok){
            showAlert("", "Item updated successfully!")
            dispatch({type: 'UPDATE_ITEM', payload: {...json, title, desc}})
            props.handleClose()
        }
    }

    return ( 
        <form className='update_wrapper' onSubmit={handleSubmit}>
            <div className='updt_form_text'>
                <h2>Edit this item!</h2>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
                </div>
            </div> 
            <div className='updtBtns'>
                <button className='formBtn'><LiaSaveSolid /></button>
                <div className='formBtn' onClick={props.handleClose} style={{background: '#ff9b04', padding: '6px 6px 0 6px'}}><IoClose /></div>
            </div> 
        </form>
     );
}
 
export default UpdateForm;
import React from 'react'
import { useState } from "react"
import Alert from './Alert';

export default function NewItemForm() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [checked] = useState(false);
    const [response, setResponse] = useState({
        isRecieved: false
    });

    const handleSubmit = async (e) =>{
        e.preventDefault()
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
            setResponse({
            isRecieved: true,
            type:"error",
            text:json.error
            })
            setTimeout(()=>{setResponse({isRecieved:false})}, 4800)

        }
        if(res.ok){
            setTitle('')
            setDesc('')
            setResponse({
                isRecieved: true,
                type:"confirmation",
                text:"Item added successfully!"
            })
            setTimeout(()=>{
                setResponse({isRecieved:false})
                
            }, 4800)
        }
    }
  return (
    <div className="form_wrapper">

        {response.isRecieved && <Alert type={response.type} text={response.text}/>}
        
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
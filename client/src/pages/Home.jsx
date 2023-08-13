import React from 'react'
import { useEffect, useState } from "react"
import Item from "../components/Item";
import NewItemForm from '../components/NewItemForm';
export default function Home() {

  const [items, setItems] = useState(null);

  useEffect(()=>{
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items/')
      const json = await response.json();
      
      if(response.ok){
        setItems(json)
      } else{
        console.log('Bros, this network is not networking')
      }
    }

    fetchItems();
  }, [])
  
  return (
    <div className='home'>
      { items && <h1>Welcome John Doe, You have {items? items.length : "no" } {items.length > 1? "items" : "item"} in your list!</h1>}
        <div className="items_wrapper">
         {items && items.map((item) => (<Item key={item._id} item={item}/>))}
        </div>
    </div>
  )
}
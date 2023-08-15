import React from 'react'
import { useEffect } from "react"
import { useItemsContext } from '../hooks/useItemsContext'
import Item from "../components/Item";

export default function Home() {

  const {items, dispatch} = useItemsContext()

  useEffect(()=>{
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items/')
      const json = await response.json();
      
      if(response.ok){
        dispatch({type: 'SET_ITEMS', payload: json})
      } else{
        console.log('Bros, this network is not networking')
      }
    }

    fetchItems();
  }, [dispatch])
  
  return (
    <div className='home'>
      { items && <h1>Welcome John Doe, You have {items? items.length : "no" } {items.length > 1? "items" : "item"} in your list!</h1>}
        <div className="items_wrapper">
         {items && items.map((item) => (<Item key={item._id} item={item}/>))}
        </div>
    </div>
  )
}

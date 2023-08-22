import React from 'react'
import { useEffect } from "react"
import { useItemsContext } from '../hooks/useItemsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import Item from "../components/Item";

export default function Home({ children }) {

  const {items, dispatch} = useItemsContext()
  const { user } = useAuthContext();
  
  useEffect(()=>{
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items/', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json();
      
      if(response.ok){
        dispatch({type: 'SET_ITEMS', payload: json})
      } else{
        console.log('Bros, this network is not networking')
      }
    }


    if(user){
    fetchItems()
  }
  
  }, [user, dispatch])
  

  return (
    <div className='home'>
      { children }
      { items && <h1>Welcome { user && user.username.charAt(0).toUpperCase() + user.username.slice(1)}, You have {items? items.length : "no" } {items.length > 1? "items" : "item"} in your list!</h1>}
        <div className="items_wrapper">
         {items && items.map((item) => (<Item key={item._id} item={item}/>))}
        </div>
    </div>
  )
}

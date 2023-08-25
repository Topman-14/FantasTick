import React from 'react'
import { useEffect } from "react"
import { useItemsContext } from '../hooks/useItemsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import Item from "../components/Item";
import Navbar from '../components/Navbar'
import { HiPlus } from "react-icons/hi";

export default function Home(props) {

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
      <Navbar handleClick={props.handleClick}/>
      { items && <h1>Welcome { user && user.username.charAt(0).toUpperCase() + user.username.slice(1)}, You have {items.length > 0? items.length : "no" } {items.length > 1? "items" : "item"} in your list!</h1>}


        <div className="items_wrapper">
         {items && items.map((item) => (<Item key={item._id} item={item}/>))}

          {(items && items.length == 0)? 
          <div className='empty_list'>
            <img src='/void2.png' alt='no results'/> 
          </div>: ""}

          {items && <button onClick={props.handleClick} className='add_item_btn in_wrapper' style={(items.length == 0)? {} : {float: "right", margin:"0"}}>Add a new Item <HiPlus className='plus_icon'/> </button> }
        </div>
    </div>
  )
}

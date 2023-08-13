import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '/fantastick_logo.png'
export default function Navbar(props) {
  return (
    <div className='nav_main'>
      <Link className='home_link'>
        <h1><span>Fantas</span>Tick</h1> 
        <img className="logo" src="/fantastick_logo.png" alt="" /> 
      </Link>
      <button className='add_item_btn' onClick={props.handleClick}>Add Item</button>
    </div>
  )
}

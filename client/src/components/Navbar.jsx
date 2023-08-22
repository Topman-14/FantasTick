import React from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'

export default function Navbar(props) {
  const {logout} = useLogout()
  return (
    <div className='nav_main'>
      <Link className='home_link'>
        <h1><span>Fantas</span>Tick</h1> 
        <img className="logo" src="/fantastick_logo.png" alt="" /> 
      </Link>
      <div>
        <button className='add_item_btn' onClick={props.handleClick}>Add Item</button>
        <Link href="/landing">
          <button className='add_item_btn' style={{background:'orangered'}} onClick={logout}>Log Out</button>
        </Link>
      </div>
    </div>
  )
}

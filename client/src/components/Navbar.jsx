import React, { useState } from 'react'
import useLogout from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { IoChevronDownSharp, IoLogOutOutline } from 'react-icons/io5'

export default function Navbar(props) {
  const {logout} = useLogout()
  const {user} = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <div className='nav_main'>
      <div className='home_link'>
        <h1><span>Fantas</span>Tick</h1> 
        <img className="logo" src="/fantastick_logo.png" alt="" /> 
      </div>
      <div className='nav_items'>
        <div className='user_profile'>
          <div className='user_details' onClick={()=> setIsDropdownOpen(prev => !prev)}>
            <p>{user && user.email}</p>
            <IoChevronDownSharp  className='down_arrow'/>
          </div>
          {isDropdownOpen && <div className='user_dropdown' onClick={logout} >Logout <IoLogOutOutline /></div>}
        </div>
        <button className='add_item_btn' onClick={props.handleClick}>Add Item</button>
      </div>
    </div>
  )
}

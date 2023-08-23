import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the FantasTick to do app</h1>
      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/signup')}>Sigup</button>
    </div>
  )
}

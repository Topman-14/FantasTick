import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }

  return (
    <main className='login_wrapper'>
      <a href='/' className='home_link'>
            <h1><span>Fantas</span>Tick</h1> 
            <img className="logo" src="/fantastick_logo.png" alt="" /> 
      </a>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <style>
            {`body{
              }
              `}</style>
          <h3 className='login_heading'>Welcome Back!</h3>
          <div className="signup_field">
            <label>Email:</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
          </div>
          <div className="signup_field">
            <label>Password:</label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
          </div>
          <button className='signup_frm_btn' style={isLoading?{cursor:"wait", background:"#8a8a8a"}:{}}>{isLoading? 'Loading...' : 'Continue'}</button>
      </form>
    </main>
  )
}

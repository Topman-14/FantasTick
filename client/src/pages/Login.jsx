import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading} = useLogin()
    const [showPassword, setShowPassword] = useState(false)

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
              min-height: 100vh;
              }
              `}
        </style>
          <h3 className='login_heading'>Welcome Back!</h3>
          <div className="signup_field">
            <label>Email:</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
          </div>
          <div className="signup_field">
            <label>Password:</label>
            <input type={showPassword ? "text" : "password"} onChange={(e)=> setPassword(e.target.value)} value={password} />
            <div className='show_pword' onClick={() => setShowPassword((prevState)=> !prevState)}>
              {!showPassword? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
            <button className='signup_frm_btn' style={isLoading ? { cursor: "wait", background: "#8a8a8a" } : {}}>{isLoading ? 'Loading...' : 'Continue'}</button><p className='login_redirect remove_margin'>Don't have an account? <a href='/signup'>Create one here✨</a></p>
      </form>
    </main>
  )
}

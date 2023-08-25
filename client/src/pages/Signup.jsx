import React, { useState, useContext } from 'react'
import { useSignup } from "../hooks/useSignup"
import { AlertContext } from '../context/alertContext';


export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const {signup, error, isLoading} = useSignup()
    const {showAlert} = useContext(AlertContext);
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== cpassword){
          showAlert("error", "Password fields do not match!")
          return
        }
        await signup(username, email, password)
    }

  return (
    <div className='signup_main'>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <style>
          {`body{
              height: 100vh;
              background: url('/test2.svg') left bottom / cover no-repeat;
            }
            .pages{
              padding: 0 80px;
              height: 100vh;
              max-width: none;
            }
        `}</style>
          <a href='/' className='home_link'>
            <h1><span>Fantas</span>Tick</h1> 
            <img className="logo" src="/fantastick_logo.png" alt="" /> 
          </a>
          <h3 className='form_headings'>Create your Account</h3>
          <div className="signup_field">
            <label>Username:</label>
            <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username} required={true}/>
          </div>
          <div className="signup_field">
            <label>Email:</label>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required={true} placeholder='example@gmail.com'/>
          </div>
          <div className="signup_field">
            <label>Password:</label>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} required={true} minLength={8} placeholder='Minimum of 8 characters'/>
          </div>
          <div className="signup_field">
            <label>Confirm Password:</label>
            <input type="password" onChange={(e)=> setCpassword(e.target.value)} value={cpassword} required={true}/>
          </div>
          <button className='signup_frm_btn' style={isLoading?{cursor:"wait", background:"#8a8a8a"}:{}}>{isLoading? 'Loading...' : 'Start Ticking !'}</button>
          <p className='login_redirect'>Already have an account? <a href='/login'>Login Instead</a></p>
      </form>
      <img src="/signup_img2.png" alt="3d woman smiling with finished checklist" className='signup_img'/>
    </div>
  )
}

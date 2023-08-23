import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
        navigate("/dashboard")
    }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <label>Email:</label>
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
        <button>{isLoading? 'Loading...' : 'Log in'}</button>
        {error && <div>{error}</div>}
    </form>
  )
}

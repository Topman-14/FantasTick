import React, { useState } from 'react'

export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(username, email, password)
    }

  return (
    <form className="signUpForm" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label>Email:</label>
        <input type="text" onChange={(e)=> setUsername(e.target.value)} value={username} />
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
        <button>Sign Up</button>
    </form>
  )
}

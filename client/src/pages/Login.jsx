import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
    }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <label>Email:</label>
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
        <button>Log in</button>
    </form>
  )
}

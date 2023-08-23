import React, { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import NewItemForm from './components/NewItemForm'
import Alert from './components/Alert'
import { AlertContext } from './context/alertContext'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const {user} = useAuthContext();

  const [isBtnClicked, setIsBtnClicked] = useState(false)

  const openItemForm = ()=>{setIsBtnClicked(true)}
  const closeItemForm = ()=>{setIsBtnClicked(false)}

  const{isRecieved, type, text} = useContext(AlertContext)

  if (isRecieved){
    
  }
  return (
    <div className='App'>
      <BrowserRouter>
        {isRecieved && <Alert type={type} text={text}/>}
          {isBtnClicked && <NewItemForm handleClick={closeItemForm}/>}
          <div className="pages">
            <Routes>
              <Route 
                path="/dashboard" 
                element={user ? <Home handleClick={openItemForm} /> : <Landing/>} 
              />

              <Route 
                path="/" 
                element={user ? <Navigate to="/dashboard" /> : <Landing />} 
              />

              <Route 
                path="/signup" 
                element={<Signup />} 
              />

              <Route 
                path="/login" 
                element={user? <Navigate to="/dashboard" /> : <Login />} 
              />
              
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App

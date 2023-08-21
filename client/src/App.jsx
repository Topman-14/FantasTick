import React, { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import NewItemForm from './components/NewItemForm'
import Alert from './components/Alert'
import { AlertContext } from './context/alertContext'

function App() {
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
        <Navbar handleClick={openItemForm}/>
          {isBtnClicked && <NewItemForm handleClick={closeItemForm}/>}
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home></Home>} />
            </Routes>
            {/* <Routes>
              <Route path="/test" element={<Landing />} />
            </Routes> */}
            <Routes>
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App

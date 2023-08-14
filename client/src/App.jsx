import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NewItemForm from './components/NewItemForm'
import Alert from './components/Alert'

function App() {
  const [isBtnClicked, setIsBtnClicked] = useState(false)

  return (
    <div className='App'>
      <BrowserRouter>
      {true && <Alert type={"error"} text={"response.text"}/>}
      {/* {response.isRecieved && <Alert type={response.type} text={response.text}/>} */}
      <Navbar handleClick={()=>{setIsBtnClicked(true)}}/>
      {isBtnClicked && <NewItemForm />}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

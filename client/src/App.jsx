// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NewItemForm from './components/NewItemForm'

function App() {
  const [isBtnClicked, setIsBtnClicked] = useState(false)

  return (
    <div className='App'>
      <BrowserRouter>
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

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './client/WebsiteLayout'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<WebsiteLayout/>}/>
      </Routes>
    </div>
  )
}

export default App

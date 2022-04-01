import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './client/WebsiteLayout'
import WebsiteCenter from './components/WebsiteCenter'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<WebsiteLayout/>}>
            <Route index element ={<WebsiteCenter/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App

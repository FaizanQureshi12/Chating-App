import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Login from './pages/Login'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import Register from './pages/Register/Register'

import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'

const UnAuthApp = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default UnAuthApp
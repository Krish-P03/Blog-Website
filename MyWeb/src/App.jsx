import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn' 
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import About from './pages/About'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'

function App() {
  return (
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/cadastro" element={<Cadastro />} />
        <Route  path="/home" element={<Home/>} />
      </Routes>
      </div>
      <Footer />
    </Router> 
  )
}

export default App

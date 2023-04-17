import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, RouteProps } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'

function App() {
  return (
      <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<CadastroUsuario/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      </div>
      <Footer />
    </Router> 
  )
}

export default App

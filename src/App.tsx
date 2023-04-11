import { useState } from 'react'
import { Grid, Paper } from '@material-ui/core'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App

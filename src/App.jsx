import { useState, useEffect } from 'react'
import NavBar from './Compons/NavBar'
import ListMovie from './Compons/ListMovie'
// import Pages from './Compons/Pages'
import MovieDetials from './Compons/MovieDetials'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import axios from 'axios'


import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {






  return (

    <div className="App">

      <NavBar />
      <div className='container'>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<ListMovie />} />
            <Route path="/movie/:id" element={<MovieDetials />} />



          </Routes>
        </BrowserRouter>

      </div>
    </div>
  )
}

export default App

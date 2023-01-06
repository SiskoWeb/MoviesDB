import React from 'react'
import "../css/NavBar.css"

import logo from "../img/logo.svg"
import {useDispatch } from 'react-redux'

import { getAllMovies,getSearchMovies } from '../Redux/actions/movieAction'
export default function NavBar() {

  const dispatch = useDispatch()
const onSearch =(word) =>{
  searchMovies(word)

}


//Search in movies
const searchMovies = async (word)=>{

  

  if(word === ""){
    dispatch(getAllMovies())
  }
 else{


  dispatch(getSearchMovies(word))
 }
 
 }
 
  return (
    <nav  >

    <div className='navBar'>
    <a className='flip-2-hor-top-1' href="/">
    <img className='imgLogo' src={logo}></img>
    </a>
    <input onChange={(e)=>onSearch(e.target.value)} className="css-input" type="text" placeholder='Search'></input></div>
    
    </nav>
  )
}

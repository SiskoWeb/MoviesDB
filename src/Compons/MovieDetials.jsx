import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../css/MovieDetials.css"
import axios from 'axios'
export default function MovieDetials() {
    const param = useParams()
    const [detail,setDetail]=useState([])


//get details movies
const getDetails = async ()=>{

    const rsp = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=813a959467ef1dc3287d3a3355547087&language=en-US`)
    setDetail(rsp.data) 
   
  }



useEffect(()=>{
    getDetails()

},[])
  return (
  
    <div className='detailMovie'>
    <div className='col1'>
   
    <img className='img' src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt={detail.original_title}></img>
   

    <div className='detailsMo'>  
<div className='text'>
<h1><span>title: </span> { detail.original_title}</h1>
<h1><span>Release Date: </span>  { detail.release_date}</h1>
</div>

</div>

  </div>


    <div className='col2'>
    
    <h1>Story:</h1>

    <p className='story'>{detail.overview}</p>
    
    </div>
    
    
    </div>
 
  )
}

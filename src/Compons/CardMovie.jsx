import React from 'react'
import {Link} from "react-router-dom"
import "../css/CardMovie.css"
export default function CardMovie({mov}) {


  return (
    <Link to={`/movie/${mov.id}`}>
    <div className='cardMovie'> 
    
    <img className='img' src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} >   
    </img>
    <div className='overshadow' >
<div className='titleMovie'>    <h4>{mov.original_title}</h4>
<h4>Release Date: {mov.release_date}</h4>
<h4> {mov.vote_average}/10</h4>


</div>
    </div>
    
    
    </div>
    </Link>
  )
}

import React from 'react'
import { useState,useEffect } from 'react'
import { Fragment } from 'react'
import "../css/ListMovie.css"
import CardMovie from "./CardMovie"
import Pages from "./Pages"
import { getAllMovies } from '../Redux/actions/movieAction'
import {useDispatch, useSelector } from 'react-redux'
export default function ListMovie() {

  const dispatchNovies = useDispatch();
  const [move,setMove]=useState([])

  useEffect(()=>{
    // getMovies()
    dispatchNovies(getAllMovies())
   
  },[])
  
  const movisRedux = useSelector(state => state.movies)






useEffect(()=>{
  setMove(movisRedux)

},[movisRedux])



  return (
<Fragment>

<div className='listCards' >
{move.length >=1?(move.map((mov)=><CardMovie  key={mov.id} mov={mov}/> )) : <h1>there's no movies </h1>}
</div>

<div className='pages' >
<Pages   />
</div>
</Fragment>
    
  
  )
}

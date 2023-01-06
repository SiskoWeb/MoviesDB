
import { ALLMOVIES,MOVIEAPI } from '../Type/movieType'
import axios from 'axios'




export const getAllMovies  =  () =>{
  return async(dispatch)=>{

    const res  =  await axios.get(MOVIEAPI)  
    dispatch({type:ALLMOVIES ,data:res.data.results,pagesT:res.data.total_pages})
  }
 
}


export const getSearchMovies  =  (word) =>{
    return async(dispatch)=>{
   
      const res =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=813a959467ef1dc3287d3a3355547087&query=${word}&language=en-US`)  
      dispatch({type:ALLMOVIES ,data:res.data.results,pagesT:res.data.total_pages})
    }
   
  }

  export const getPage = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=813a959467ef1dc3287d3a3355547087&language=en-US&page=${page}`)

        dispatch({ type: ALLMOVIES, data: res.data.results, pagesT:res.data.total_pages })

    }
}
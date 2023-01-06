import React from 'react'
import { useState,useEffect } from 'react'


import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector } from 'react-redux'
import {getPage,getSearchMovies} from '../Redux/actions/movieAction'


export default function Pages() {
    const dispatch = useDispatch();

    const pagesc = useSelector(state => state.pageCount);

    
    const [pageCount, setPageCount] = useState(0)
    const [updatePages, setUpdatePages] = useState(false)


    useEffect(() => {
 
        setPageCount(pagesc)
    }, [])
  







  const handlePageClick = (event) => {

      dispatch(getPage(event.selected + 1))



  }




  return (
      <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="Prev"
          containerClassName={"pagination justify-content-center p-3"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          renderOnZeroPageCount={null}
      />
  )
}

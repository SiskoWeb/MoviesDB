import { ALLMOVIES } from '../Type/movieType'


const initalValue = { movies: [], pageCount: 0 }
export const movieReducer = (state = initalValue,action )=>{

    switch (action.type) {
        case ALLMOVIES:
            return { movies: action.data, pageCount: action.pagesT , activePage:action.activP }
        default:
            return state;
    }
}

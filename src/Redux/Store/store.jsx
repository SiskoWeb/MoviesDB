import { createStore ,applyMiddleware} from 'redux'
import { movieReducer } from '../Reducer/movieReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(movieReducer,composeWithDevTools(applyMiddleware(thunk)))
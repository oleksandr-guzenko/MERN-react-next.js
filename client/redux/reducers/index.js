import { combineReducers } from 'redux'
import authReducer from './authReducer'
import moviesReducer from './moviesReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  authentication: authReducer
})

export default rootReducer

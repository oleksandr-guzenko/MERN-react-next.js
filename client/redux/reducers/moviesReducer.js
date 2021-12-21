import {MOVIES} from 'redux/types'
import {HYDRATE} from 'next-redux-wrapper'

const reducer = (state = {movies: ''}, action) => {
  switch (action.type) {
  case HYDRATE:
    return {...state, ...action.payload}
  case MOVIES:
    return {...state, movies: action.payload}
  default:
    return state
  }
}

export default reducer
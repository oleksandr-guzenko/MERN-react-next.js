import axios from 'axios'
import {MOVIES} from '../types'
import {MOVIES_API_URL} from 'config/api.config'

export const getMovies = ({token}) => 
  (dispatch) => axios.get(`${MOVIES_API_URL}/find`, {
    headers: {'x-auth-token': token}
  }).then((response) => dispatch({type: MOVIES, payload: response.data}))

export const getMovie = ({token, id}) => 
  (dispatch) => axios.get(`${MOVIES_API_URL}/find/${id}`, {
    headers: {'x-auth-token': token}
  }).then((response) => dispatch({type: MOVIES, payload: response.data}))

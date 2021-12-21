import axios from 'axios'
import {MOVIES} from '../types'
import {MOVIES_API_URL} from 'config/api.config'

export const getMovies = () => 
  (dispatch) => axios({
    method: 'GET',
    url: MOVIES_API_URL,
    headers: []
  }).then((response) => dispatch({type: MOVIES, payload: response.data}))

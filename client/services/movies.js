import axios from 'axios'
import {MOVIES_API_URL} from 'config/api.config'

export const getMoviesService = async ({token}) => {
  return axios.get(
    `${MOVIES_API_URL}/find`, {
      headers: {'x-auth-token': token}
    })
}

export const getMovieService = async ({token, id}) => {
  return axios.get(
    `${MOVIES_API_URL}/find/${id}`, {
      headers: {'x-auth-token': token}
    })
}
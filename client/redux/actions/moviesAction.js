import { MOVIES, MOVIE } from '../types'
import { getMoviesService, getMovieService } from 'services/moviesService'

export const getMovies = ({ token }) =>
  async (dispatch) => await getMoviesService({ token })
    .then(({ data }) => dispatch({ type: MOVIES, payload: data }))

export const getMovie = ({ token, id }) =>
  async (dispatch) => await getMovieService({ token, id })
    .then(({ data }) => dispatch({ type: MOVIE, payload: data }))

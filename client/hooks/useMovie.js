import { useEffect, useState } from 'react'
import { getMovieService } from 'services/moviesService'

export function useMovie ({ token, id }) {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await getMovieService({ token, id })
      setMovie(data)
    }
    fetchMovie()
  }, [id])

  return movie
}

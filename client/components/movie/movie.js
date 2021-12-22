import PropType from 'prop-types'

const getMovie = ({movies, id}) => 
  movies.find((movie) => movie._id === id)

export default function Movie({id, movies}) {
  const movie = getMovie({movies, id})

  if(!movie) return null

  return (
    <div>
      <h1>Movie</h1>
      <p>{movie.name}</p>
      <p>{movie.duration}</p>
      <p>{movie.synopsis}</p>
    </div>
  )
}

Movie.propTypes = {
  id: PropType.string,
  movies: PropType.array,
  synopsis: PropType.string,
}
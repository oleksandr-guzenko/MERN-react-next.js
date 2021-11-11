import PropTypes from 'prop-types'

export default function Details({movie}) {
  return (
    <div key={movie._id}>
      <h1>Details</h1>

      <h2>{movie.name}</h2>
      <p>{movie.duration}</p>
      <p>{movie.synopsis}</p>

    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:4000/api/movie/find/')
  const movies = await res.json()

  const paths = movies.map((movie) => ({
    params: {id: movie._id}
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`http://localhost:4000/api/movie/find/${id}`)
  const movie = await res.json()

  return {
    props: {
      movie
    }
  }
}

Details.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
  })
}
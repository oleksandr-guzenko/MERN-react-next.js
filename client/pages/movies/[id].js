import Layout from 'components/layout/layout'
import PropTypes from 'prop-types'

/**
 * @description Details page for a movie
 * 
 * @param {*} props
 * @returns {Component}
 */
export default function Details({movie}) {
  return (
    <Layout>
      <h1>Details</h1>
      <h2>{movie.name}</h2>
      <p>{movie.duration}</p>
      <p>{movie.synopsis}</p>
    </Layout>
  )
}

/**
 * @description PropTypes for the Details component
 * 
 * @returns {Object}
 */
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.MOVIES_API_URL}/find`)
  const movies = await res.json()

  const paths = movies.map((movie) => ({
    params: {id: movie._id}
  }))

  return {
    paths,
    fallback: false
  }
}

/**
 * @description Fetches the movie data
 * 
 * @param {*} context 
 * @returns {Object}
 */
export const getStaticProps = async ({params}) => {
  const res = await fetch(`${process.env.MOVIES_API_URL}/find/${params.id}`)
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
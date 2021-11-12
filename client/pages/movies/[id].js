import PropTypes from 'prop-types'
import {get} from 'helpers/fetchWrapper'
import PageTitle from 'components/pageTitle/pageTitle'
import Container from 'components/container/container'

/**
 * @description Details page for a movie
 * 
 * @param {*} props
 * @returns {Component}
 */
export default function Details({movie}) {
  return (
    <>
      <PageTitle title={movie.name} />
      <Container key={movie._id}>
        <h1>Details</h1>
        <h2>{movie.name}</h2>
        <p>{movie.duration}</p>
        <p>{movie.synopsis}</p>
      </Container>
    </>
  )
}

/**
 * @description PropTypes for the Details component
 * 
 * @returns {Object}
 */
export const getStaticPaths = async () => {
  const movies = await get(`${process.env.MOVIES_API_URL}/find`)

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
  const movie = await get(`${process.env.MOVIES_API_URL}/find/${params.id}`)

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
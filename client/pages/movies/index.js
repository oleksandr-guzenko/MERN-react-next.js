import Link from 'next/link'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'
import {wrapper} from '../../redux/index'
import Movie from 'components/movie/movie'
import Layout from 'components/layout/layout'
import {getMovies} from 'redux/actions/moviesAction'
import {checkServerSideCookie} from 'redux/actions/authActions'

/**
 * @description Movies list component
 * 
 * @param {*} props 
 * @returns {Component}
 */
const MoviesList = ({movies}) => (
  <ul>
    {movies.map(({_id, name, duration}) => (
      <li key={_id}>
        <Link href={`?id=${_id}`} as={`/movie/${name}`}>
          <a>{name} | {duration}</a>
        </Link>
      </li>
    ))}
  </ul>
)
/**
 * @description Movies page
 * 
 * @param {*} props 
 * @returns {Component}
 */
export default function Movies({token, movies}) {
  const router = useRouter()

  return (
    <Layout title='Movies' isAuthenticated={token}>
      <h1>Movies</h1>
      <MoviesList movies={movies} />

      <Modal
        isOpen={!!router.query.id}
        onRequestClose={() => router.push('/movies')}
      >
        <Movie id={router.query.id} token={token}/>        
      </Modal>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({req}) => {
    checkServerSideCookie({req, store})
    const token = store.getState().authentication.token
    await store.dispatch(getMovies({token}))
    const movies = store.getState().movies.movies
    return {
      props: {
        token,
        movies
      },
    }
  }
)

MoviesList.propTypes = {
  movies: PropTypes.array
}

Movies.propTypes = {
  token: PropTypes.string,
  movies: PropTypes.array
}
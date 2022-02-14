import Link from 'next/link'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import Movie from 'components/movie/movie'
import { wrapper } from '../../redux/index'
import Layout from 'components/layout/layout'
import { getMovies } from 'redux/actions/moviesAction'
import { checkServerSideCookie } from 'redux/actions/authActions'

/**
 * @description Movies list component
 *
 * @param {*} props
 * @returns {Component}
 */
const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(({ _id, name, duration }) => (
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
export default function Movies ({ token, movies }) {
  const { query: { id }, push } = useRouter()

  return (
    <Layout title='Movies' isAuthenticated={token}>
      <h1>Movies</h1>
      <MoviesList movies={movies} />

      <Modal
        isOpen={!!id}
        onRequestClose={() => push('/movies')}
      >
        <Movie id={id} token={token}/>
      </Modal>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req }) => {
    checkServerSideCookie({ req, store })
    const token = store.getState().authentication.token
    await store.dispatch(getMovies({ token }))
    const movies = store.getState().movies.movies
    return {
      props: {
        token,
        movies
      }
    }
  }
)

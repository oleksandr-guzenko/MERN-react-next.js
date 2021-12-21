import PropTypes from 'prop-types'
import {wrapper} from '../redux/index'
import Layout from 'components/layout/layout'
import {getMovies} from 'redux/actions/moviesAction'
import {checkServerSideCookie} from 'redux/actions/authActions'

/**
 * @description Index page
 * 
 * @returns {Component}
 */
function Index({movies, token}) {
  return (
    <Layout isAuthenticated={token}>
      <h1>Index</h1>
      <p>
        {JSON.stringify(movies)}
      </p>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({req}) => {
    console.log(req.cookies)
    checkServerSideCookie({req, store})
    const token = store.getState().authentication.token
    await store.dispatch(getMovies())
    const movies = store.getState().movies.movies
    return {
      props: {
        movies,
        token,
      },
    }
  }
)

Index.propTypes = {
  movies: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired
}

export default Index
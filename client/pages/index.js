import PropTypes from 'prop-types'
import {wrapper} from '../redux/index'
import Layout from 'components/layout/layout'
import {checkServerSideCookie} from 'redux/actions/authActions'
import {useEffect} from 'react'
import Router from 'next/router'

/**
 * @description Index page
 * 
 * @returns {Component}
 */
function Index({token}) {

  useEffect(() => {
    if(!token)
      Router.push('/auth/signIn')
  })

  return (
    <Layout isAuthenticated={token}>
      <h1>Index</h1>
      <p>
        Index page
      </p>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({req}) => {
    checkServerSideCookie({req, store})
    const token = store.getState().authentication.token
    return {
      props: {
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
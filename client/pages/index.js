import {useEffect} from 'react'
import {Notify} from 'notiflix'
import Router from 'next/router'
import PropTypes from 'prop-types'
import {wrapper} from '../redux/index'
import Layout from 'components/layout/layout'
import {checkServerSideCookie} from 'redux/actions/authActions'

/**
 * @description Index page
 * 
 * @returns {Component}
 */
export default function Index({token}) {

  useEffect(() => {
    if(!token) {
      Notify.warning('You are not logged in')
      Router.push('/auth/signIn')
    }
  })

  return (
    <Layout title='Index' isAuthenticated={token}>
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
  token: PropTypes.string
}
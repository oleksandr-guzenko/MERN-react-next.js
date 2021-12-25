import {useEffect} from 'react'
import {Notify} from 'notiflix'
import Router from 'next/router'
import PropTypes from 'prop-types'
import {wrapper} from '../redux/index'
import Layout from 'components/layout/layout'
import {checkServerSideCookie} from '../redux/actions/authActions'

/**
 * @description About page
 * 
 * @returns {Component}
 */
export default function About({token}) {
  useEffect(() => {
    if(!token) {
      Notify.warning('You are not logged in')
      Router.push('/auth/signIn')
    }
  })

  return (
    <Layout title='About' isAuthenticated={token}>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, doloremque, quibusdam quisquam dolorum, quidem
        necessitatibus, quam quisquam quis, quisquam quisquam.
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

About.propTypes = {
  token: PropTypes.string
}
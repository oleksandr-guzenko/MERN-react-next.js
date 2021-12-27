import Router from 'next/router'
import { useEffect } from 'react'
import { Notify } from 'notiflix'
import Box from '@mui/material/Box'
import { wrapper } from '../redux/index'
import Layout from 'components/layout/layout'
import { checkServerSideCookie } from 'redux/actions/authActions'

/**
 * @description Index page
 *
 * @returns {Component}
 */
export default function Index ({ token }) {
  useEffect(() => {
    if (!token) {
      Notify.warning('You are not logged in')
      Router.push('/auth/signIn')
    }
  })

  return (
    <Layout title='Index' isAuthenticated={token}>
      <h1>Index</h1>
      <Box sx={{ my: 2 }}>
        {[...new Array(20)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </Box>
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req }) => {
    checkServerSideCookie({ req, store })
    const token = store.getState().authentication.token
    return {
      props: {
        token
      }
    }
  }
)

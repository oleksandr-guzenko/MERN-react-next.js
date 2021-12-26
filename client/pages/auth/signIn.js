import { Notify } from 'notiflix'
import Router from 'next/router'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { wrapper } from '../../redux/index'
import Layout from 'components/layout/layout'
import { authenticate, checkServerSideCookie } from 'redux/actions/authActions'

const Signin = ({ authenticate, token }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    authenticate({ user, type: 'signin' })
  }

  useEffect(() => {
    if (token) {
      Notify.success('You are now logged in!')
      Router.push('/')
    }
  }, [])

  return (
    <Layout title="Sign In" isAuthenticated={token}>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name='email'
            type="email"
            placeholder="Email"
            required
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name='password'
            className="input"
            type="password"
            placeholder="Password"
            required
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
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

export default connect((state) => state, { authenticate })(Signin)

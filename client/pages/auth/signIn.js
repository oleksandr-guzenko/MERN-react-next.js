import Router from 'next/router'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {wrapper} from '../../redux/index'
import Layout from 'components/layout/layout'
import {authenticate, checkServerSideCookie} from 'redux/actions/authActions'

const Signin = ({authenticate, token}) => {
  const [email, setEmail] = useState('ricardo@gmail.com')
  const [password, setPassword] = useState('password')

  const handleSubmit = (e) => {
    e.preventDefault()
    authenticate({email, password}, 'signin')
  }

  useEffect(() => {
    if (token) {
      Router.push('/')
    }
  }, [])

  return (
    <Layout title="Sign In" isAuthenticated={token}>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={({target}) => setEmail(target.value)}
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={({target}) => setPassword(target.value)}
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

Signin.propTypes = {
  authenticate: PropTypes.func.isRequired,
  token: PropTypes.string,
}

export default connect((state) => state, {authenticate})(Signin)
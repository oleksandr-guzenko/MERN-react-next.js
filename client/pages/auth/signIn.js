import {connect} from 'react-redux'
import initialize from 'helpers/initialize'
import Layout from 'components/layout/layout'

function SignIn() {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {}

  const handleChange = () => {}

  return (
    <Layout title="SignIn">
      <form>
        <h1>Sign In</h1>

        {error && <p>{error}</p>}

        <input 
          type='email' 
          name='email' 
          onChange={handleChange} 
        />

        <input
          type='password' 
          name='password' 
          onChange={handleChange} 
        />

        <button 
          disabled={loading} 
          onClick={handleSubmit}
        >
            SignIn
        </button>

      </form>
    </Layout>
  )
}

SignIn.getInitialProps = (context) => {
  initialize(context)
}

export default connect((state) => state)(SignIn)